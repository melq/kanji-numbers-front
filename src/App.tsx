import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainScreenContainer from "./containers/MainScreenConteiner";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={'/'} component={MainScreenContainer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
