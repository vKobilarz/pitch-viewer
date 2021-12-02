import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import GuitarInstrument from '../pages/GuitarInstrument';
import Instruments from '../pages/Instruments';

const RouterProvider = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/instruments" />
        </Route>
        <Route path="/instruments" exact>
          <Instruments />
        </Route>
        <Route path="/instruments/guitar">
          <GuitarInstrument />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterProvider;
