import React from 'react';

import InstrumentProvider from '../Notes';
import NotesContent from './NotesContent';

export const withNotes = (
  Component: () => JSX.Element,
): (() => JSX.Element) => {
  return () => {
    return (
      <InstrumentProvider>
        <NotesContent>
          <Component />
        </NotesContent>
      </InstrumentProvider>
    );
  };
};
