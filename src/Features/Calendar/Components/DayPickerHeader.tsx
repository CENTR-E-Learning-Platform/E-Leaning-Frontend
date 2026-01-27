import { useDayPicker } from 'react-day-picker';
import leftArrow from '../../../assets/icons/leftArrow.svg';
import rightArrow from '../../../assets/icons/rightArrow.svg';
import { format } from 'date-fns';
const DayPickerHeader = (props:any)=> {
    const {goToMonth ,  nextMonth, previousMonth} = useDayPicker();
    const currentMonth = props.displayMonth || props.month || (props.calendarMonth && props.calendarMonth.date);
  return (
    <>
        <div className='w-[265px] h-[28px] flex justify-between mb-[12px]'>
            <img 
            onClick={()=> previousMonth && goToMonth(previousMonth)}
            className='cursor-pointer'
            src={leftArrow} alt="" />
            <div className='text-black  text-[15px]'>{currentMonth && format(currentMonth, 'MMMM yyyy')}</div>
            <img 
            onClick={()=> nextMonth && goToMonth(nextMonth)}
            src={rightArrow} alt="" />
        </div>
    </>
  )
}

export default DayPickerHeader;