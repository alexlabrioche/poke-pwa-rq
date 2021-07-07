import { fromJS, List, Record } from "immutable";

const pokemonValues = {
  id: "",
  height: Number.isNaN,
  weight: Number.isNaN,
  name: "",
  order: Number.isNaN,
};

const pokemonListValues = {
  count: Number.isNaN,
  results: new List(),
};

export class Pokemon extends Record(pokemonValues) {
  isTall() {
    return this.height > 100;
  }
  isHeavy() {
    return this.weight > 500;
  }
}

export class PokemonList extends Record(pokemonListValues) {
  static reviver(key, seq) {
    if (key === "results") {
      return new List(
        seq.map((result) => fromJS(result.toJS(), PokemonList.reviver))
      );
    }
    return seq;
  }
}
