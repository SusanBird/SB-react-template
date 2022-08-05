import client from './supabase-client.js';

export function getUser() {
  return client.auth.user();
}

export async function signUp(email, password) {
  return await client.auth.signUp({ email, password });
}

export async function signIn(email, password) {
  return await client.auth.signIn({ email, password });
}

export async function signOut() {
  return await client.auth.signOut();
}

export async function getProfile() {
  const user = getUser();

  return await client
    .from('profiles')
    .select()
    .eq('id', user.id)
    .single();
}

export async function updateProfile(profile) {
  return await client
    .from('profiles')
    .upsert(profile)
    .eq('id', profile.id)
    .single();
}

const BUCKET_NAME = 'avatars';

export async function uploadAvatar(userId, imageFile) {
  // put into a folder...
  const imageName = `${userId}/${imageFile.name}`;

  // we can use the storage bucket to upload the image,
  // then use it to get the public URL
  const bucket = client.storage.from(BUCKET_NAME);

  const { data, error } = await bucket.upload(imageName, imageFile, {
    cacheControl: '3600',
    // in this case, we will _replace_ any
    // existing file with same name.
    upsert: true,
  });

  let url = null;

  if (!error) {
    url = bucket.getPublicUrl(
      data.Key.replace(`${BUCKET_NAME}/`, '')
    ).publicURL;
  }

  return { url, error };
}
