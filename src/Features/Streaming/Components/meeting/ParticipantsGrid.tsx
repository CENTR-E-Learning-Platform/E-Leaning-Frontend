import React, { useState, useRef, useEffect, useMemo } from "react";
import { 
  VideoTrack, 
  useTracks, 
  type TrackReferenceOrPlaceholder 
} from "@livekit/components-react";
import { Track } from "livekit-client";
import '@livekit/components-styles';

const  ParticipantsGrid = ()=>  {
  const tracks: TrackReferenceOrPlaceholder[] = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );


  const screenShareTrack = useMemo(() => 
    tracks.find(t => t.source === Track.Source.ScreenShare), 
  [tracks]);

 
  const presenterCameraTrack = useMemo(() => {
    if (!screenShareTrack) return undefined;
    return tracks.find(t => 
      t.source === Track.Source.Camera && 
      t.participant.identity === screenShareTrack.participant.identity
    );
  }, [tracks, screenShareTrack]);

   const otherCameraTracks = useMemo(() => 
    tracks.filter(t => 
      t.source === Track.Source.Camera && 
      t.participant.identity !== screenShareTrack?.participant.identity
    ), 
  [tracks, screenShareTrack]);

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
    return (
      
      <div className="w-full h-full flex flex-col gap-2 p-2 relative">
        {/* main screen  */}
        <div className="flex-1 w-full bg-black rounded-xl overflow-hidden relative border border-[#393D44]">
          <VideoTrack
            trackRef={screenShareTrack as any}
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-5 left-5 bg-[#2A2D34B2] text-white px-3 py-1 rounded-full text-sm font-bold pointer-events-none">
            Presenter: {screenShareTrack.participant.identity}
          </div>

         {/* screen showing when user share screen  */}
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
          {/* other people its mean +1 people */}
        {otherCameraTracks.length > 0 && (
          <div className="h-[120px] w-full flex gap-2 overflow-x-auto pb-1 z-10">
            {otherCameraTracks.map((track) => (
              <div 
                key={track.participant.identity} 
                className="h-full min-w-[160px] bg-black rounded-xl overflow-hidden relative border border-[#393D44]"
              >
                <VideoTrack
                  trackRef={track as any}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 left-2 bg-black/60 text-white text-xs px-2 rounded">
                  {track.participant.identity}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }


  return (
    <div className="w-full h-full p-2">
      <div className={`grid gap-2 h-full w-full ${
          tracks.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
        }`}>
        {tracks.map((trackRef) => (
          <div 
             key={trackRef.participant.identity + trackRef.source} 
             className="relative w-full h-full bg-black rounded-xl overflow-hidden border border-[#393D44]"
          >
            <VideoTrack
              trackRef={trackRef as any}
              className="w-full h-full object-cover"
            />
             <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 rounded">
              {trackRef.participant.identity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ParticipantsGrid;