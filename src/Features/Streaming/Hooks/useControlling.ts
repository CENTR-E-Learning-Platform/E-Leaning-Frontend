import { useState } from "react";

export const useControlling = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);

  const initStream = async () => {
    const media = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    setStream(media);
  };

  const toggleCamera = () => {
    if (!stream) return;
    const track = stream.getVideoTracks()[0];
    if (track) track.enabled = !track.enabled;
  };

  const toggleMic = () => {
    if (!stream) return;
    const track = stream.getAudioTracks()[0];
    if (track) track.enabled = !track.enabled;
  };

  const stopStream = () => {
    if (!stream) return;

    stream.getTracks().forEach((track) => {
      track.stop(); 
    });

    setStream(null);
  };

  return { initStream, toggleCamera, toggleMic, stopStream, stream };
};
