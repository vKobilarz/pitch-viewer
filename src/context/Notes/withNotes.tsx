import React from 'react';

import NotesProvider from '../Notes';
import NotesContent from './NotesContent';

export const withNotes = (
  Component: () => JSX.Element,
): (() => JSX.Element) => {
  return () => {
    return (
      <NotesProvider>
        <NotesContent>
          <Component />
        </NotesContent>
      </NotesProvider>
    );
  };
};
