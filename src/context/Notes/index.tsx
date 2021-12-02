import React, {
  createContext,
  useContext,
  FC,
  useState,
  useCallback,
} from 'react';

interface Note {
  octave: number;
  name: string;
  frequency: number;
}

interface NoteWithIndex extends Note {
  originIndex: number;
}

interface GetRelatedNotesResponse {
  previousNote: NoteWithIndex;
  nextNote: NoteWithIndex;
}

interface InstrumentLinePayload {
  firstNote: {
    octave: number;
    name: string;
  };
  length: number;
}

interface NotesContextState {
  initializeNotes(initialNotes: Note[]): void;
  getInstrumentLineNotes(payload: InstrumentLinePayload): NoteWithIndex[];
  getRelatedNotes(originIndex: number): GetRelatedNotesResponse;
}

const NotesContext = createContext<NotesContextState>({} as NotesContextState);

const NotesProvider: FC = ({ children }) => {
  const [notes, setNotes] = useState<NoteWithIndex[]>([]);

  const initializeNotes = useCallback((initialNotes: Note[]) => {
    const notesWithIndex = initialNotes.map((notes, index) => ({
      ...notes,
      originIndex: index,
    }));

    setNotes(notesWithIndex);
  }, []);

  const getInstrumentLineNotes = useCallback(
    ({ firstNote, length }: InstrumentLinePayload): NoteWithIndex[] => {
      const firstNoteIndex = notes.findIndex(
        (note) =>
          note.name === firstNote.name && note.octave === firstNote.octave,
      );
      const lastNoteIndex = firstNoteIndex + length;

      return notes.slice(firstNoteIndex, lastNoteIndex);
    },
    [notes],
  );

  const getRelatedNotes = useCallback(
    (originIndex: number): GetRelatedNotesResponse => {
      const previousNote = notes[originIndex - 1];
      const nextNote = notes[originIndex + 1];

      return { previousNote, nextNote };
    },
    [notes],
  );

  return (
    <NotesContext.Provider
      value={{ initializeNotes, getInstrumentLineNotes, getRelatedNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NotesContext);
};

export default NotesProvider;
