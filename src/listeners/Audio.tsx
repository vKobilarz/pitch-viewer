import React, { FC, useCallback, useEffect, useState } from 'react';

import AudioContext, { getCurrentPitch } from '../helpers/audio';

const buflen = 2048;

const analyserNode = AudioContext.getAnalyser();
const audioCtx = AudioContext.getAudioContext();

var buf = new Float32Array(buflen);

const AudioListener: FC = () => {
  const [source, setSource] = useState<MediaStreamAudioSourceNode>();
  const [pitch, setPitch] = useState<number>(-1);

  const updatePitch = useCallback(() => {
    analyserNode.getFloatTimeDomainData(buf);
    const currentPitch = getCurrentPitch(buf, audioCtx.sampleRate);
    if (currentPitch > -1) {
      setPitch(currentPitch);
    }
  }, []);

  const getMicInput = useCallback(() => {
    return navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        latency: 0,
      },
    });
  }, []);

  useEffect(() => {
    if (source != null) {
      source.connect(analyserNode);
    }
  }, [source]);

  useEffect(() => {
    getMicInput().then(async (input) => {
      if (audioCtx.state === 'suspended') {
        await audioCtx.resume();
      }
      setSource(audioCtx.createMediaStreamSource(input));
    });
  }, [getMicInput, updatePitch]);
  setInterval(updatePitch, 50);

  return <div>Current Pitch: {pitch}</div>;
};

export default AudioListener;
