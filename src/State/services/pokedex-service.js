const API_URL =
  'https://pokedex-alchemy.herokuapp.com/api/pokedex';
const TYPES_URL = `${API_URL}/types`;

export async function getPokedex() {
  const res = await fetch(`${API_URL}?${''}`);
  const body = await res.json();

  return {
    data: res.ok ? body : null,
    error: res.ok ? null : body,
  };
}

export async function getTypes() {
  const res = await fetch(TYPES_URL);
  const body = await res.json();
  
  return {
    data: res.ok ? body : null,
    error: res.ok ? null : body,
  };
}
