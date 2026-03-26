import React from 'react';
import heart from '../../../../assets/icons/heart.svg';
import smile from '../../../../assets/icons/smile.svg';
import scard from '../../../../assets/icons/scard.svg';
import sleep from '../../../../assets/icons/sleep.svg';
import wow from '../../../../assets/icons/wow.svg';
import lovly from '../../../../assets/icons/lovly.svg';
import { useFooter } from '../../Hooks/useFooter';

interface ReactionItem {
    type: "heart" | "smile" | "scard" | "sleep" | "wow" | "lovly";
    icon: string;
}

const Reaction: React.FC = () => {
    const { sendEmoji } = useFooter();

    const reactions: ReactionItem[] = [
        { type: "heart", icon: heart },
        { type: "smile", icon: smile },
        { type: "scard", icon: scard },
        { type: "sleep", icon: sleep },
        { type: "wow", icon: wow },
        { type: "lovly", icon: lovly },
    ];

    return (
        <div className="w-[212px] h-[34px] bg-[#454950] rounded-[61px] flex justify-center items-center gap-[8px]">
            {reactions.map((reaction) => (
                <img 
                    key={reaction.type}
                    onClick={() => sendEmoji(reaction.type)}
                    src={reaction.icon} 
                    className='cursor-pointer hover:scale-125 transition-transform w-6 h-6' // أضفت حجم ثابت للصورة
                    alt={reaction.type} 
                />
            ))}
        </div>
    );
};

export default Reaction;