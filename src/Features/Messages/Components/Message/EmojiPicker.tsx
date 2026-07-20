import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

type Props = {
  onSelect: (emoji: string) => void;
};

const EmojiPicker = ({ onSelect }: Props) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[10px] z-50 bg-white rounded-lg shadow-xl border border-gray-100">
      <Picker
        data={data}
        onEmojiSelect={(emoji: any) => onSelect(emoji.native)}
        theme="light"
        previewPosition="none"
        emojiSize={20}
        emojiButtonSize={28}
        perLine={7}
        maxFrequentRows={1}
      />
    </div>
  );
};

export default EmojiPicker;