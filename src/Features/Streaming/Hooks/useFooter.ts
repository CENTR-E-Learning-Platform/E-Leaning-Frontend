import { useCallback } from "react";
import { useControlContext } from "../Context/ControlContext";
import heart from "../../../assets/icons/heart.svg";
import smile from "../../../assets/icons/smile.svg";
import scard from "../../../assets/icons/scard.svg";
import sleep from "../../../assets/icons/sleep.svg";
import wow from "../../../assets/icons/wow.svg";
import lovly from "../../../assets/icons/lovly.svg";
import { useLocalParticipant } from "@livekit/components-react";

type EmojiType = "heart" | "smile" | "scard" | "sleep" | "wow" | "lovly";

export const useFooter = () => {
  const { localParticipant } = useLocalParticipant();
  const { setEmoji } = useControlContext();

  const AddEmoji = useCallback((type: string) => {
    const newEmoji = { id: Date.now(), type };
    setEmoji((prev: any[]) => [...prev, newEmoji]);
  }, [setEmoji]);

  const sendEmoji = useCallback(async (emojiType: EmojiType) => {
    AddEmoji(emojiType);

    if (!localParticipant) {
        console.warn("Local participant not connected");
        return;
    }

    const payload = JSON.stringify({ type: 'EMOJI', content: emojiType });
    const data = new TextEncoder().encode(payload);

    try {
      await localParticipant.publishData(data, {
        reliable: true, 
        topic: "reactions"
      });
    } catch (error) {
      console.error("Failed to publish emoji:", error);
    }
  }, [localParticipant, AddEmoji]);

  const getEmojiIcon = (type: string) => {
    switch (type) {
      case "heart": return heart;
      case "smile": return smile;
      case "scard": return scard;
      case "sleep": return sleep;
      case "wow": return wow;
      case "lovly": return lovly;
      default: return heart;
    }
  };

  const removeEmoji = useCallback((id: number) => {
    setEmoji((prev: any[]) => prev.filter((e) => e.id !== id));
  }, [setEmoji]);

  const raisHand = useCallback((newstate:boolean) => {
    if(!localParticipant){
      console.warn("Local participant not connected");
      return;
    }
    const payload = JSON.stringify({type:"raisHand" , content:newstate})
    const data = new TextEncoder().encode(payload);
    
    try{
      localParticipant.publishData(data , {
      reliable:true,
      topic:"notifications"
    });
    }catch(error){
       console.error("Failed to publish emoji:", error);
    }
  }, [localParticipant])
  return { AddEmoji, getEmojiIcon, removeEmoji, sendEmoji, raisHand };
};