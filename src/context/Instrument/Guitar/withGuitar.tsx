import React, { FC } from 'react';

import InstrumentProvider from '../../Instrument';
import GuitarContent from './GuitarContent';

const withGuitar = (Component: FC): (() => JSX.Element) => {
  return () => {
    return (
      <InstrumentProvider>
        <GuitarContent>
          <Component />
        </GuitarContent>
      </InstrumentProvider>
    );
  };
};

export default withGuitar;
