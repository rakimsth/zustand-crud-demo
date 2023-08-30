import usePokemonStore from "../../store/pokemonStore";
import { useEffect } from "react";

export const PokemonList = () => {
  const getPokemons = usePokemonStore((state) => state.fetchPokemon);
  const pokemonList = usePokemonStore((state) => state.pokemons);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  if (!pokemonList.length) {
    return "Loading";
  }

  return (
    <ol>
      {pokemonList.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </ol>
  );
};
