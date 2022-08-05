import client from './supabase-client.js';

export async function getFamiliesWithBunnies() {
  return await client.from('loving_families').select(`
    id,
    name,
    avatar,
    bunnies:fuzzy_bunnies(
        id,
        familyId:family_id,
        name
    )
  `);
}

export async function getBunnies() {
  return [
    { id: 1, name: 'trogdor', familyId: 1 },
    { id: 2, name: 'strongbad', familyId: 1 },
    { id: 1, name: 'peasant', familyId: 1 },
  ];
}

export async function addFamily(family) {
  return await client
    .from('loving_families')
    .insert(family)
    .single();
}

export async function removeFamily(id) {
  return await client
    .from('loving_families')
    .delete()
    .eq('id', id)
    .single();
}

export async function updateFamily(id, familyUpdate) {  
  return await client
    .from('loving_families')
    .update(familyUpdate)
    .eq('id', id)
    .single();
}
