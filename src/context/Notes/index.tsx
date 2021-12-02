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

interface NotesContextState {
  notes: Note[];

  initializeNotes(initialNotes: Note[]): void;
}

const NotesContext = createContext<NotesContextState>({} as NotesContextState);

const NotesProvider: FC = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const initializeNotes = useCallback((initialNotes: Note[]) => {
    setNotes(initialNotes);
  }, []);

  return (
    <NotesContext.Provider value={{ notes, initializeNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NotesContext);
};

export default NotesProvider;
