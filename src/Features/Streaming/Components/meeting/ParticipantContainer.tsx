import { useIsSpeaking } from "@livekit/components-react";

const ParticipantContainer = ({ 
  participant, 
  className = "", 
  defaultBorder = "", 
  children, 
  ...rest 
}: any) => {
  const isSpeaking = useIsSpeaking(participant);
  
  return (
    <div 
      className={`${className} transition-all duration-300 ${
        isSpeaking 
          ? "border-[2px] border-[#80da88] scale-[1.01]" 
          : defaultBorder
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};
export default ParticipantContainer;