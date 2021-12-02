import React, { FC, useMemo } from 'react';

import { useNotes } from '../../context/Notes';
import InstrumentNote from '../InstrumentNote';

import { LineContainer } from './styles';

interface InstrumentLineProps {
  firstNote: {
    octave: number;
    name: string;
  };
  length: number;
  currentPitch: number;
}

const InstrumentLine: FC<InstrumentLineProps> = ({
  currentPitch,
  firstNote,
  length,
}) => {
  const { getInstrumentLineNotes } = useNotes();

  const notes = useMemo(
    () => getInstrumentLineNotes({ firstNote, length }),
    [getInstrumentLineNotes, firstNote, length],
  );

  return (
    <LineContainer>
      {notes.map((note) => (
        <InstrumentNote
          key={note.frequency}
          {...note}
          currentPitch={currentPitch}
        />
      ))}
    </LineContainer>
  );
};

export default InstrumentLine;
