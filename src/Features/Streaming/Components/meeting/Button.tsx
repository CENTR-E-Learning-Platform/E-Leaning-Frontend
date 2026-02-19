const Button = (props:any) => {
    return(
        <>
            <button 
            onClick={ props.func}
            className="bg-[#2A2D34] w-[48px] h-[48px] rounded-[8px] flex justify-center items-center cursor-pointer me-[4px] border-[2px] border-[#393D44] hover:bg-[#454950] transition duration-300">
                <img src={props.icons} className={props.size} alt="" />
            </button>
        </>
    )
}
export default Button;