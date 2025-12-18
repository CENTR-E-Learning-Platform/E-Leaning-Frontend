import downArrow from '../../../../assets/icons/arrow.svg';
import Rect from './Rect';
const Options = () => {
    return(
        <>
            <div className="w-[302px] h-[397px] bg-[#393D44] p-[30px] ">
                <h1 className="text-[18px] text-[#F9FBFC]">Device settings</h1>
                <div className="mt-[30px]">
                    <Rect icon = {downArrow} title = "Headset Earphone" header = "Speaker"/>
                    <Rect icon = {downArrow} title = "Headset Microphone" header = "Microphone"/>
                    <Rect icon = {downArrow} title = "Integrated Camera" header = "Camera"/>
                </div>
            </div>
        </>
    )
}
export default Options;