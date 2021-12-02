import React, { FC, useMemo } from 'react';
import { useNotes } from '../../context/Notes';

import { NoteContainer } from './styles';

interface InstrumentNoteProps {
  octave: number;
  name: string;
  frequency: number;
  originIndex: number;
  currentPitch: number;
}

const InstrumentNote: FC<InstrumentNoteProps> = ({
  octave,
  name,
  frequency,
  originIndex,
  currentPitch,
}) => {
  const { getRelatedNotes } = useNotes();

  const { previousNote, nextNote } = useMemo(
    () => getRelatedNotes(originIndex),
    [getRelatedNotes, originIndex],
  );

  const isActive = useMemo(() => {
    const lowerInterval = (previousNote.frequency + frequency) / 2;
    const upperInterval = (nextNote.frequency + frequency) / 2;

    return currentPitch >= lowerInterval && currentPitch < upperInterval;
  }, [currentPitch, nextNote.frequency, previousNote.frequency, frequency]);

  return <NoteContainer isActive={isActive}>{name}</NoteContainer>;
};

export default InstrumentNote;
