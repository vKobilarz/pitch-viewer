import React, { FC, useCallback, useState } from 'react';

import AudioListener from '../../listeners/Audio';

const GuitarInstrument: FC = () => {
  const [listenerActive, setListenerActive] = useState<Boolean>(false);

  const handleStartClick = useCallback(() => {
    setListenerActive(true);
  }, []);

  return (
    <>
      {listenerActive && <AudioListener />}
      <button onClick={handleStartClick}>Start</button>
    </>
  );
};

export default GuitarInstrument;
