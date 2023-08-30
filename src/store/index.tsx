import { create } from "zustand";

import { pokemonStore } from "./pokemonStore";
import { courseStore } from "./courseStore";

export const useCombinedStore = create(
  // persist(
  (...params) => ({
    ...pokemonStore(...params),
    ...courseStore(...params),
  })
  // { name: 'combined-store' }
  // )
);

// NOTE

// use above code if you want to combine two different store which donot have persist feature
// aka
// Bounded useStore hook for vanilla stores

// You can use persist to bind the store together and persist it.

// Read here if you want to partialize (only persist some part of combined store) >>
// https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md
