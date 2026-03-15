import { useState } from "react";

export const useControlling = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const initStream = async () => {
    try {
      const media = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStream(media);
      return media;
    } catch (error) {
      console.error("Error accessing media devices.", error);
      return null;
    }
  };

  const toggleCamera = async () => {
    if (!stream) return;

    const videoTrack = stream.getVideoTracks()[0];

    if (videoTrack && videoTrack.readyState === "live") {
      videoTrack.stop();
      setStream(new MediaStream([ ...stream.getAudioTracks() ])); 
    } else {
      try {
        const newVideoContext = await navigator.mediaDevices.getUserMedia({ video: true });
        const newVideoTrack = newVideoContext.getVideoTracks()[0];
        const newStream = new MediaStream([
          ...stream.getAudioTracks(),
          newVideoTrack
        ]);
        
        setStream(newStream);
      } catch (err) {
        console.error("Could not restart camera", err);
      }
    }
  };

  const toggleMic = (customStream?: MediaStream) => {
    const s = customStream || stream;
    if (!s) return;
    const track = s.getAudioTracks()[0];
    if (track) track.enabled = !track.enabled; 
  };

  const stopStream = () => {
    if (!stream) return;
    stream.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  return { initStream, toggleCamera, toggleMic, stopStream, stream };
};