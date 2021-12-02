import { FC, useCallback, useEffect, useState } from 'react';

import AudioContext, { getCurrentPitch } from '../helpers/audio';

const buflen = 2048;

const analyserNode = AudioContext.getAnalyser();
const audioCtx = AudioContext.getAudioContext();

var buf = new Float32Array(buflen);

interface AudioListenerProps {
  onPitchChange(newPitch: number): void;
}

const AudioListener: FC<AudioListenerProps> = ({ onPitchChange }) => {
  const [source, setSource] = useState<MediaStreamAudioSourceNode>();

  const updatePitch = useCallback(() => {
    analyserNode.getFloatTimeDomainData(buf);
    const currentPitch = getCurrentPitch(buf, audioCtx.sampleRate);
    if (currentPitch > -1) {
      onPitchChange(currentPitch);
    }
  }, [onPitchChange]);

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

  return null;
};

export default AudioListener;
