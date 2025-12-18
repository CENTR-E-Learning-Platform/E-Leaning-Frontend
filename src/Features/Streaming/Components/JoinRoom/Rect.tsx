const Rect = (props:any) => {
    return(
        <>             
            <p className="text-[14px] mb-[8px] text-[#F9FBFC] mt-[30px]">{props.header}</p>
            <select className="h-[39px] w-[242px] text-[#FFFFFF]   rounded-[4px] bg-[#454950]  ">
               
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>

        </>
    )
}
export default Rect;