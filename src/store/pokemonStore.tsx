import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

type pokemon = {
  name: string;
  url: string;
};

type pokemonState = {
  pokemons: pokemon[];
  fetchPokemon: () => void;
};

export const pokemonStore = (set) => ({
  pokemons: [],
  fetchPokemon: async () => {
    // replace this with tanstack query
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => set({ pokemons: data.results }));
  },
});

const usePokemonStore = create(
  devtools(
    persist<pokemonState>(pokemonStore, {
      name: "pokemon",
    })
  )
);

export default usePokemonStore;
