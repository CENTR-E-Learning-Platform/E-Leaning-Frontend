const Button = (props:any) => {
    
  return (
    <>
      <div 
      onClick={props.func}
      className="cursor-pointer w-[48px] h-[48px] flex justify-center items-center rounded-[8px] border-[2px] border-[#393D44]">
        <img src={props.src} className= "w-[19px] h-[20px]" alt="" />
      </div>
    </>
  );
};
export default Button;
