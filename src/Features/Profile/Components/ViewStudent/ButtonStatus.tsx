
const ButtonStatus = ( props : {imgClass: string, icon: string, rating: string, NumberOfReviews: string}) => {
  return <>
  
    <div className="bg-[#C8CCF44D] px-4 py-2 rounded-[4px] h-[60px]">
          <div className="flex gap-1 items-center">

            <img className={props.imgClass} src={props.icon} />

            <p className="text-[18px] font-Poppins font-semibold text-[#4152FB]">
              {props.rating}
            </p>

          </div>

          <p className="text-[#4152FB] font-semibold text-[12px]">
            {props.NumberOfReviews}
          </p>

    </div>
  
  
  </>
}

export default ButtonStatus