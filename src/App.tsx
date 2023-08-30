import CourseForm from "./components/courses/CourseForm";
import CourseList from "./components/courses/CourseList";

import { PokemonList } from "./components/pokemons/PokemonList";

const App = () => {
  return (
    <>
      <CourseForm />
      <CourseList />
      <br />
      <PokemonList />
    </>
  );
};

export default App;
