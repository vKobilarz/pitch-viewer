import React from 'react';
import { withNotes } from './context/Notes/withNotes';
import RouterProvider from './routes';

const App = () => {
  return <RouterProvider />;
};

export default withNotes(App);
