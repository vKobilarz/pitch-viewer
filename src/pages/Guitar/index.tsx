import React, { FC, useCallback, useState } from 'react';

import AudioListener from '../../listeners/Audio';

const GuitarView: FC = () => {
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

export default GuitarView;
