import { format, addMonths } from 'date-fns';
import leftArrow from '../../../assets/icons/leftArrow.svg';
import rightArrow from '../../../assets/icons/rightArrow.svg';

const DayPickerHeader = ({ month, setMonth }: any) => {
  return (
    <div className="w-[265px] h-[28px] flex justify-between mb-[12px]">
      <img
        src={leftArrow}
        className="cursor-pointer w-[28px] h-[28px]"
        onClick={() => setMonth(addMonths(month, -1))}
      />

      <div className="text-black text-[15px] uppercase">
        {format(month, 'MMMM yyyy')}
      </div>

      <img
        src={rightArrow}
        className="cursor-pointer w-[28px] h-[28px]"
        onClick={() => setMonth(addMonths(month, 1))}
      />
    </div>
  );
};

export default DayPickerHeader;
