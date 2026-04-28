import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

type Props = {
  onSelect: (emoji: string) => void;
};

const EmojiPicker = ({ onSelect }: Props) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[10px] z-50">
      <Picker
        data={data}
        onEmojiSelect={(emoji: any) => onSelect(emoji.native)}
      />
    </div>
  );
};

export default EmojiPicker;