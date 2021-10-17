import { Fragment } from "react";
import GlobalStyles from './GlobalStyles';
import ListaPokemon from "./ListaPokemon/ListaPokemon";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <ListaPokemon />
    </Fragment> 
  );
}

export default App;
