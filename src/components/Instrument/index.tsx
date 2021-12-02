import React, { FC, useCallback, useState } from 'react';

import AudioListener from '../../listeners/Audio';

const Instrument: FC = () => {
  const [listenerActive, setListenerActive] = useState<Boolean>(false);

  const handleStartClick = useCallback(() => {
    setListenerActive(true);
  }, []);

  const handlePitchChange = useCallback((newPitch) => {}, []);

  return (
    <>
      {listenerActive && <AudioListener onPitchChange={handlePitchChange} />}
      <button onClick={handleStartClick}>Start</button>
    </>
  );
};

export default Instrument;
