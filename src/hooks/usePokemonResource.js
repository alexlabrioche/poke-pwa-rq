// import React from 'react'
import { useQuery } from "react-query";
import { getPokemonList, getPokemonByName } from "../services/poke-api";

export function usePokemonListResource() {
  const rqObj = useQuery(["pokemon"], getPokemonList, {
    staleTime: 10 * 1000,
  });

  return rqObj;
}

export function usePokemonDetailsResource(name) {
  const rqObj = useQuery(["pokemon", name], () => getPokemonByName(name), {
    staleTime: 10 * 1000,
  });

  return rqObj;
}
