import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

import GuitarInstrument from '../pages/GuitarInstrument';
import Instruments from '../pages/Instruments';

import PageRoute from './PageRoute';

const RouterProvider = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/instruments" />
        </Route>
        <PageRoute
          title="Instruments"
          routeParams={{ path: '/instruments', exact: true }}
        >
          <Instruments />
        </PageRoute>
        <PageRoute
          title="Guitar Instrument"
          routeParams={{ path: '/instruments/guitar' }}
        >
          <GuitarInstrument />
        </PageRoute>
      </Switch>
    </Router>
  );
};

export default RouterProvider;
