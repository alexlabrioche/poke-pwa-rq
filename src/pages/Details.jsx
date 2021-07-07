import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { usePokemonDetailsResource } from "../hooks/usePokemonResource";

export default function Details() {
  const { name } = useParams();
  const pokemonDetailsResource = usePokemonDetailsResource(name);

  if (pokemonDetailsResource.isLoading) {
    return "Chargement...";
  }

  return (
    <div>
      <Link to="/">retour</Link>
      <h1>{pokemonDetailsResource.data.name}</h1>
      {pokemonDetailsResource.data.isTall() &&
        `${pokemonDetailsResource.data.name} est grand`}
      {pokemonDetailsResource.data.isHeavy() &&
        `${pokemonDetailsResource.data.name} est lourd`}
    </div>
  );
}
