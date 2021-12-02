import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

import PageLayout from '../components/PageLayout';

import GuitarInstrument from '../pages/GuitarInstrument';
import Instruments from '../pages/Instruments';

const RouterProvider = () => {
  return (
    <PageLayout>
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
    </PageLayout>
  );
};

export default RouterProvider;
