import React, { useState, useRef, useEffect } from "react";
import { 
  useLocalParticipant,
  VideoTrack
} from "@livekit/components-react";

import '@livekit/components-styles';
import { useParticipant } from "../../Hooks/useParticipant";
import { BASE_URL } from "../../Utils/Apis";
import { useControlContext } from "../../Context/ControlContext";
import raishand from "../../../../assets/icons/raishand.svg";
import { motion, AnimatePresence } from "framer-motion";

interface ParticipantsGridProps {
  isRais: string[];
}

const ParticipantsGrid: React.FC<ParticipantsGridProps> = ({ isRais = [] }) => {
  const { tracks, screenShareTrack, presenterCameraTrack, otherCameraTracks } = useParticipant();
  const { localParticipant } = useLocalParticipant();
  const { isClickattend } = useControlContext();

  const [position, setPosition] = useState({ x: 20, y: 20 });
  const isDragging = useRef<boolean>(false);
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

  const renderNameTag = (name: any, isSmall: boolean = false) => {
    const safeName = name || ""; 
    const isHandRaised = isRais?.includes(safeName);
    
    const containerPadding = isSmall ? "px-[4px] py-[1px]" : "px-[12px] py-[6px]";
    const positionClasses = isSmall ? "bottom-[4px] left-[4px]" : "bottom-3 left-3";
    const textSize = isSmall ? "text-[10px]" : "text-[14px]";
    const circleSize = isSmall ? "w-[12px] h-[12px]" : "w-[22px] h-[22px]";
    const iconSize = isSmall ? "w-[6px] h-[6px]" : "w-[12px] h-[12px]";

    const isLongName = safeName.length > 15;
    const displayName = isLongName ? safeName.slice(0, 15) + "..." : safeName;

    return (
      <motion.div 
        layout 
        className={`group absolute ${positionClasses} flex items-center gap-[4px] ${containerPadding} rounded-[4px] transition-colors duration-300 ease-in-out z-10 ${
          isHandRaised 
            ? "bg-[#80da88] text-[#1E1E1E] shadow-lg" 
            : "bg-black/60 text-[#F9FBFC]"
        }`}
      >
        {isLongName && (
          <div className="absolute bottom-full left-0 mb-1 hidden group-hover:block bg-[#2A2D34] text-[#F9FBFC] text-[12px] px-[8px] py-[4px] rounded-[4px] shadow-lg whitespace-nowrap z-50 border border-[#454950]">
            {safeName}
          </div>
        )}

        <AnimatePresence mode="wait">
          {isHandRaised && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`flex items-center justify-center bg-[#1E1E1E] rounded-full ${circleSize}`}
            >
              <img src={raishand} alt="" className={iconSize} />
            </motion.div>
          )}
        </AnimatePresence>
        <span className={`${textSize} font-[500] whitespace-nowrap cursor-default`}>
          {displayName}
        </span>
      </motion.div>
    );
  };

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
          
          {renderNameTag(screenShareTrack.participant.name)}

          {presenterCameraTrack && presenterCameraTrack.participant.isCameraEnabled && (
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
              {renderNameTag(presenterCameraTrack.participant.name, true)}
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
                {renderNameTag(track.participant.name, true)}
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
            className="relative w-full h-full rounded-xl overflow-hidden border border-[#393D44] bg-[#393D44]" 
          >
          {trackRef.participant.isCameraEnabled ? (
            <VideoTrack
              trackRef={trackRef as any}
              className="w-full h-full object-cover"
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

          {renderNameTag(trackRef.participant.name)}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ParticipantsGrid;