import React, { useState, useRef, useEffect } from "react";
import { 
  useLocalParticipant,
  VideoTrack
} from "@livekit/components-react";

import '@livekit/components-styles';
import { useParticipant } from "../../Hooks/useParticipant";
import { BASE_URL } from "../../Utils/Apis";
import { useControlContext } from "../../Context/ControlContext";
const  ParticipantsGrid = ()=>  {
  const {tracks , screenShareTrack , presenterCameraTrack , otherCameraTracks} = useParticipant();
    const { localParticipant } = useLocalParticipant();
    const {isClickattend} = useControlContext();


  const [position, setPosition] = useState({ x: 20, y: 20 });
  const isDragging = useRef(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const elementStartPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    elementStartPos.current = { ...position };
    e.preventDefault(); 
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
   
      const dx = dragStartPos.current.x - e.clientX; 
      const dy = dragStartPos.current.y - e.clientY; 
      
      setPosition({
        x: elementStartPos.current.x + dx,
        y: elementStartPos.current.y + dy
      });
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    if (screenShareTrack) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [screenShareTrack]);


  if (tracks.length === 0) return <div className="text-white flex justify-center items-center h-full">Waiting...</div>;
  
  if (screenShareTrack) {
    const activeOtherTracks = otherCameraTracks.filter(
      (track) => track.participant.isScreenShareEnabled || track.participant.isCameraEnabled
    );

    return (
      <div className="w-full h-full flex flex-row gap-2 p-2 relative">
        <div className="flex-1 h-full rounded-xl overflow-hidden relative ">
          <VideoTrack
            trackRef={screenShareTrack as any}
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-5 left-5 bg-[#2A2D34B2] text-white px-3 py-1 rounded-full text-sm font-[400] pointer-events-none">
            {screenShareTrack.participant.name}
          </div>

          {presenterCameraTrack && (
            <div 
              onMouseDown={handleMouseDown}
              style={{ 
                right: `${position.x}px`, 
                bottom: `${position.y}px`,
                cursor: 'move',
                zIndex: 50
              }}
              className="absolute w-[200px] h-[120px] rounded-lg overflow-hidden shadow-2xl border-2 border-[#5E6570] hover:border-white transition-colors bg-black"
            >
              <VideoTrack 
                 trackRef={presenterCameraTrack as any} 
                 className="w-full h-full object-cover pointer-events-none" 
              />
            </div>
          )}
        </div>

        {activeOtherTracks.length > 0 && !isClickattend && (
          <div className="w-[200px] h-full flex flex-col gap-2 overflow-y-auto z-10">
            {activeOtherTracks.map((track) => (
              <div 
                key={track.participant.identity} 
                className="w-full h-[120px] bg-black rounded-lg overflow-hidden relative border border-[#393D44]"
              >
                <VideoTrack
                  trackRef={track as any}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 left-2 bg-black/60 text-white text-xs px-2 rounded">
                  {track.participant.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }


  return (
    <div className="w-full h-full p-2  ">
      <div className={`grid gap-2 h-full w-full  ${
          tracks.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
        }`}>
        {tracks.map((trackRef) => (
          
          <div 
            key={trackRef.participant.identity + trackRef.source} 
            className="relative w-full h-full  rounded-xl overflow-hidden border border-[#393D44] bg-[#393D44]" 
          >
          {trackRef.participant.isCameraEnabled ?(
          <VideoTrack
            trackRef={trackRef as any}
            className="w-full h-full object-cover "
                />
      ) : (
        <div className="w-full h-full flex justify-center items-center">
        <div className="w-[30%] aspect-square">
          <img
            src={`${BASE_URL}/${trackRef.participant.attributes["UserImage"]}`}
            className="w-full h-full rounded-full object-cover"
            alt=""
          />
        </div>
    </div>
    )}

            <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 rounded">
              {trackRef.participant.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ParticipantsGrid;