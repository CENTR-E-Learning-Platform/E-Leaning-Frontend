const Button = (props:any) => {
    return(
        <>
            <button className="bg-[#393D44] w-[48px] h-[48px] rounded-[8px] flex justify-center items-center cursor-pointer me-[4px]">
                <img src={props.icons} className={props.size} alt="" />
            </button>
        </>
    )
}
export default Button;