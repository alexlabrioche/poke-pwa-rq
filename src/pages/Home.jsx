import { Link } from "react-router-dom";
import { usePokemonListResource } from "../hooks/usePokemonResource";

function Home() {
  const pokemonListResource = usePokemonListResource();

  return (
    <div>
      {pokemonListResource.data.results.map(({ name }) => (
        <div key={name}>
          <Link to={`/${name}`}>{name}</Link>
        </div>
      ))}
      <br />{" "}
      <button onClick={pokemonListResource.refetch}>mettre à jour</button>
    </div>
  );
}

export default Home;
