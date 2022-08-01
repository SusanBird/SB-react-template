const API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
const TYPES_URL = `${API_URL}/types`;

export async function getPokedex(searchParams, page) {
  return await get(
    `${API_URL}?${searchParams.toString()}&page=${page}`
  );
}

export async function getTypes() {
  return await get(TYPES_URL);
}

async function get(url) {
  const res = await fetch(url);
  const body = await res.json();

  return {
    data: res.ok ? body : null,
    error: res.ok ? null : body,
  };
}
