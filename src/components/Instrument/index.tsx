import React, { FC, useCallback, useState } from 'react';
import { useInstrument } from '../../context/Instrument';

import AudioListener from '../../listeners/Audio';
import InstrumentLine from '../InstrumentLine';

import { Button, InstrumentContainer, NotesContainer } from './styles';

const Instrument: FC = () => {
  const { instrumentLines } = useInstrument();

  const [started, setStarted] = useState<Boolean>(false);
  const [currentPitch, setCurrentPitch] = useState<number>(-1);

  const handleStartClick = useCallback(() => {
    setStarted((prevState) => !prevState);
  }, []);

  const handlePitchChange = useCallback((newPitch) => {
    setCurrentPitch(newPitch);
  }, []);

  return (
    <InstrumentContainer>
      {started && <AudioListener onPitchChange={handlePitchChange} />}
      <Button onClick={handleStartClick}>{started ? 'Stop' : 'Start'}</Button>
      {started && (
        <NotesContainer>
          {instrumentLines.map((line) => (
            <InstrumentLine
              key={`${line.firstNote.name}-${line.firstNote.octave}`}
              currentPitch={currentPitch}
              {...line}
            />
          ))}
        </NotesContainer>
      )}
    </InstrumentContainer>
  );
};

export default Instrument;
