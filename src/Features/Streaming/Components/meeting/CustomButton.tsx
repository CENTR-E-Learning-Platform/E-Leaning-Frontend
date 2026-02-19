const CustomButton = (props:any) => {
  return (
    <>
        <div className="">
           
            <button 
            className="bg-[#454950] w-[71px] h-[48px] rounded-[8px] flex items-center cursor-pointer me-[4px] border-[2px] border-[#393D44]">
                <div 
                onClick={props.arrowFunc}
                className="flex justify-center items-center w-[21px] h-full cursor-pointer">
                    <img src={props.arrow} className="w-[12px] h-[12px]" alt="" />
                </div>
                <div 
                onClick={props.func}
                className="w-[48px] h-[46px] bg-[#2A2D34] flex justify-center items-center rounded-[8px] cursor-pointer">
                    <img src={props.icons} className={props.size} alt="" />
                </div>
        </button>
        </div>
    </>
  )
}

export default CustomButton