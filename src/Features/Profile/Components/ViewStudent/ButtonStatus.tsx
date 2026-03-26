
const ButtonStatus = ( props : {imgClass: string, icon: string, rating: string, reviews: string}) => {
  return <>
  
    <div className="bg-[#C8CCF44D] px-4 py-2 rounded-[4px] h-[60px]">
          <div className="w-[50px] flex gap-1 justify-between items-center">

            <img className={props.imgClass} src={props.icon} />

            <p className="text-[18px] font-Poppins font-semibold text-[#4152FB]">
              {props.rating}
            </p>

          </div>

          <p className="text-[#4152FB] font-semibold text-[12px]">
            {props.reviews}
          </p>

    </div>
  
  
  </>
}

export default ButtonStatus