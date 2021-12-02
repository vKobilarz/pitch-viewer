import React, { FC } from 'react';

import ElectricGruitar from '../../assets/electric-guitar.svg';
import BassGuitar from '../../assets/bass-guitar.svg';

import Icon from '../../components/Icon';

import {
  InstrumentsContainer,
  InstrumentButton,
  InstrumentTitle,
  InstrumentsList,
} from './styles';

const Instruments: FC = () => {
  return (
    <InstrumentsContainer>
      <h2>Select your instrument!</h2>
      <InstrumentsList>
        <InstrumentButton to="/instruments/guitar">
          <Icon path={ElectricGruitar} width={128} />
          <InstrumentTitle>Guitar</InstrumentTitle>
        </InstrumentButton>
        <InstrumentButton to="/instruments/bass">
          <Icon path={BassGuitar} width={128} />
          <InstrumentTitle>Bass</InstrumentTitle>
        </InstrumentButton>
      </InstrumentsList>
    </InstrumentsContainer>
  );
};

export default Instruments;
