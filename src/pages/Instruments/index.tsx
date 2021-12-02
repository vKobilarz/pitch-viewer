import React, { FC } from 'react';

import ElectricGruitar from '../../assets/electric-guitar.svg';
import BassGuitar from '../../assets/bass-guitar.svg';

import Icon from '../../components/Icon';

import { InstrumentButton } from './styles';

const Instruments: FC = () => {
  return (
    <>
      <h2>Select your instrument!</h2>
      <InstrumentButton>
        <Icon path={ElectricGruitar} width={128} />
      </InstrumentButton>
      <InstrumentButton>
        <Icon path={BassGuitar} width={128} />
      </InstrumentButton>
    </>
  );
};

export default Instruments;
