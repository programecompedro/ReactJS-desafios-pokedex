import GlobalStyles from './GlobalStyles';
import ListaPokemon from "./ListaPokemon/ListaPokemon";
import '@fontsource/roboto/500.css';
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="md">
      <GlobalStyles />
      <ListaPokemon />
    </Container> 
  );
}

export default App;
