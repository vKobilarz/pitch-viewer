import React, { FC, useEffect } from 'react';
import { getInstrumentNotes } from '../../../services/InstrumentService';

import { useInstrument } from '../../Instrument';

const GuitarContent: FC = ({ children }) => {
  const { initializeInstrumentLines, instrumentLines } = useInstrument();

  console.log(instrumentLines);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getInstrumentNotes({ name: 'guitar' });

        const [guitarData] = data;

        initializeInstrumentLines(guitarData.lines);
      } catch (err) {}
    };

    fetchData();
  }, [initializeInstrumentLines]);

  return <>{children}</>;
};

export default GuitarContent;
