const API_URL =
  'https://pokedex-alchemy.herokuapp.com/api/pokedex';

export async function getPokedex() {
  const res = await fetch(`${API_URL}?${''}`);
  const body = await res.json();

  return {
    data: res.ok ? body : null,
    error: res.ok ? null : body,
  };
}
