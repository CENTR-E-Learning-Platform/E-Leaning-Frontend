import React, { useState, useRef, useEffect } from "react";
import {
  VideoTrack
} from "@livekit/components-react";

import '@livekit/components-styles';
import { useParticipant } from "../../Hooks/useParticipant";
import { BASE_URL } from "../../Utils/Apis";
import { useControlContext } from "../../Context/ControlContext";
import microphon from "../../../../assets/icons/mic.svg";
import microphondis from "../../../../assets/icons/mic2.svg";
import raishand from "../../../../assets/icons/raishand.svg";
import { motion, AnimatePresence } from "framer-motion";
import DefaultImage from "./DefaultImage";
import ParticipantContainer from "./ParticipantContainer";

interface ParticipantsGridProps {
  isRais: string[];
}

const FullScreenButton = () => {
  const toggleFullScreen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const container = e.currentTarget.parentElement;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <button
      onClick={toggleFullScreen}
      className="absolute bottom-3 right-3 z-[60] bg-black/50 hover:bg-black/80 text-white p-2 rounded-[6px] opacity-0 group-hover/container:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
      title="Toggle Fullscreen"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
      </svg>
    </button>
  );
};

const ParticipantsGrid: React.FC<ParticipantsGridProps> = ({ isRais = [] }) => {
  const { tracks, screenShareTrack, presenterCameraTrack, otherCameraTracks } = useParticipant();
  const { isClickattend } = useControlContext();

  const [position, setPosition] = useState({ x: 20, y: 20 });
  const isDragging = useRef<boolean>(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const elementStartPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const renderNameTag = (participant: any, isSmall: boolean = false) => {
    const safeName = participant?.name || "";
    const isHandRaised = isRais?.includes(safeName);
    const isMicEnabled = participant?.isMicrophoneEnabled;

    const containerPadding = isSmall ? "px-[4px] py-[1px]" : "px-[12px] py-[6px]";
    const positionClasses = isSmall ? "bottom-[4px] left-[4px]" : "bottom-3 left-3";
    const textSize = isSmall ? "text-[10px]" : "text-[14px]";
    const circleSize = isSmall ? "w-[12px] h-[12px]" : "w-[22px] h-[22px]";
    const handIconSize = isSmall ? "w-[6px] h-[6px]" : "w-[12px] h-[12px]";
    const micIconSize = isSmall ? "w-[10px] h-[10px]" : "w-[16px] h-[16px]";

    const isLongName = safeName.length > 15;
    const displayName = isLongName ? safeName.slice(0, 15) + "..." : safeName;

    return (
      <motion.div
        layout
        className={`group/name absolute ${positionClasses} flex items-center gap-[6px] ${containerPadding} rounded-[4px] transition-colors duration-300 ease-in-out z-10 ${isHandRaised
            ? "bg-[#80da88] text-[#1E1E1E] shadow-lg"
            : "bg-black/60 text-[#F9FBFC]"
          }`}
      >
        {isLongName && (
          <div className="absolute bottom-full left-0 mb-1 hidden group-hover/name:block bg-[#2A2D34] text-[#F9FBFC] text-[12px] px-[8px] py-[4px] rounded-[4px] shadow-lg whitespace-nowrap z-50 border border-[#454950]">
            {safeName}
          </div>
        )}

        <AnimatePresence mode="wait">
          {isHandRaised && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`flex items-center justify-center bg-[#1E1E1E] rounded-full ${circleSize}`}
            >
              <img src={raishand} alt="" className={handIconSize} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-[6px]">
          <span className={`${textSize} font-[500] whitespace-nowrap cursor-default`}>
            {displayName}
          </span>
          <img
            src={isMicEnabled ? microphon : microphondis}
            alt={isMicEnabled ? "Mic On" : "Mic Off"}
            className={micIconSize}
          />
        </div>
      </motion.div>
    );
  };

  if (tracks.length === 0) return <div className="text-white flex justify-center items-center h-full">Waiting...</div>;

  if (screenShareTrack) {
    const activeOtherTracks = otherCameraTracks.filter(
      (track: any) => track.participant.isScreenShareEnabled || track.participant.isCameraEnabled
    );

    return (
      <div className="w-full h-full flex flex-row gap-2 p-2 relative">
        <div className="group/container flex-1 h-full rounded-xl overflow-hidden relative bg-[#393D44]">
          <FullScreenButton />
          <VideoTrack
            trackRef={screenShareTrack as any}
            className="w-full h-full object-contain"
          />

          {renderNameTag(screenShareTrack.participant)}

          {presenterCameraTrack && presenterCameraTrack.participant.isCameraEnabled && (
            <ParticipantContainer
              participant={presenterCameraTrack.participant}
              onMouseDown={handleMouseDown}
              style={{
                right: `${position.x}px`,
                bottom: `${position.y}px`,
                cursor: 'move',
                zIndex: 50
              }}
              className="group/container absolute w-[200px] h-[120px] rounded-lg overflow-hidden bg-black"
              defaultBorder="border-2 border-[#5E6570] hover:border-white"
            >
              <FullScreenButton />
              <VideoTrack
                trackRef={presenterCameraTrack as any}
                className="w-full h-full object-cover pointer-events-none"
              />
              {renderNameTag(presenterCameraTrack.participant, true)}
            </ParticipantContainer>
          )}
        </div>

        {activeOtherTracks.length > 0 && !isClickattend && (
          <div className="w-[200px] h-full flex flex-col gap-2 overflow-y-auto z-10">
            {activeOtherTracks.map((track: any) => (
              <ParticipantContainer
                key={track.participant.identity}
                participant={track.participant}
                className="group/container w-full h-[120px] bg-black rounded-lg overflow-hidden relative"
                defaultBorder=""
              >
                <FullScreenButton />
                <VideoTrack
                  trackRef={track as any}
                  className="w-full h-full object-cover"
                />
                {renderNameTag(track.participant, true)}
              </ParticipantContainer>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full h-full p-2">
      <div className={`grid gap-2 h-full w-full ${tracks.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
        }`}>
        {tracks.map((trackRef: any) => (
          <ParticipantContainer
            key={trackRef.participant.identity + trackRef.source}
            participant={trackRef.participant}
            className="group/container relative w-full h-full rounded-xl overflow-hidden bg-[#393D44]"
            defaultBorder=""
          >
            <FullScreenButton />

            {trackRef.participant.isCameraEnabled ? (
              <VideoTrack
                trackRef={trackRef as any}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <div className="w-[30%] aspect-square">
                  {
                    trackRef.participant.attributes["UserImage"] ?
                      <img
                        src={`${BASE_URL}/${trackRef.participant.attributes["UserImage"]}`}
                        className="w-full h-full rounded-full object-cover"
                        alt=""
                      /> :
                      <DefaultImage character={trackRef.participant.name?.toString()?.substring(0, 2).toLocaleUpperCase()} />
                  }
                </div>
              </div>
            )}

            {renderNameTag(trackRef.participant)}
          </ParticipantContainer>
        ))}
      </div>
    </div>
  );
}

export default ParticipantsGrid;