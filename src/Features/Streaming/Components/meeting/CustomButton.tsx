import { useControlContext } from "../../Context/ControlContext"
const CustomButton = (props:any) => {
    const {mute} = useControlContext();
  return (
    <>
        <div className="">
            <button 
            className={`${mute ? "opacity-60" : ""}  bg-[#454950] w-[71px] h-[48px] rounded-[8px] flex items-center cursor-pointer me-[4px] border-[2px] border-[#393D44]`}>
                <div 
                onClick={!mute ? props.arrowFunc : undefined}
                className="flex justify-center items-center w-[21px] h-full cursor-pointer">
                    <img src={props.arrow} className="w-[12px] h-[12px]" alt="" />
                </div>
                <div 
                onClick={!mute ? props.func : undefined}
                className={`w-[48px] h-[46px] ${mute ? "opacity-60" : ""}  bg-[#2A2D34] flex justify-center items-center rounded-[8px] cursor-pointer`}>
                    <img src={props.icons} className={props.size} alt="" />
                </div>
        </button>
        </div>
    </>
  )
}

export default CustomButton