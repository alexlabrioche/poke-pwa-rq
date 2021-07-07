import axios from "axios";
import { PokemonList, Pokemon } from "../entities/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokeApi = async (uri) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await axios.get(`${BASE_URL}${uri}`);
  return res.data;
};

export const getPokemonList = async () => {
  const result = await fetchPokeApi("/pokemon");
  return new PokemonList(result);
};

export const getPokemonByName = async (name) => {
  const result = await fetchPokeApi(`/pokemon/${name}`);
  return new Pokemon(result);
};
