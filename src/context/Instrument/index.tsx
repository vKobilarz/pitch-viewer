import React, {
  createContext,
  useContext,
  FC,
  useState,
  useCallback,
} from 'react';

interface InstrumentLine {
  length: number;
  firstNote: {
    octave: number;
    name: string;
  };
}

interface InstrumentContextState {
  instrumentLines: InstrumentLine[];

  initializeInstrumentLines(initialInstrumentLines: InstrumentLine[]): void;
}

const InstrumentContext = createContext<InstrumentContextState>(
  {} as InstrumentContextState,
);

const InstrumentProvider: FC = ({ children }) => {
  const [instrumentLines, setInstrumentLines] = useState<InstrumentLine[]>([]);

  const initializeInstrumentLines = useCallback(
    (initialInstrumentLines: InstrumentLine[]) => {
      setInstrumentLines(initialInstrumentLines);
    },
    [],
  );

  return (
    <InstrumentContext.Provider
      value={{ instrumentLines, initializeInstrumentLines }}
    >
      {children}
    </InstrumentContext.Provider>
  );
};

export const useInstrument = () => {
  return useContext(InstrumentContext);
};

export default InstrumentProvider;
