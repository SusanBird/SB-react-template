import { client } from './client.js';

export async function getFamiliesWithBunnies() {
  const response = await client.from('loving_families').select(`
    id,
    name,
    avatar,
    bunnies:fuzzy_bunnies(
        id,
        familyId:family_id,
        name
    )
  `);

  return response;
}
