import { Fragment } from "react";
import GlobalStyles from './GlobalStyles';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Fragment>
  );
}

export default App;
