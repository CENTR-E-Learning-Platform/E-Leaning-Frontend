
const ButtomVerification = (props : any) => {
  return <>
    
     <div className="p-4 border-2 w-[541px] border-[#E8EAED] mb-3 rounded-[4px]">
        <div className={`flex justify-between items-center gap-2.5 ${props.width }`}>
            <img src={props.icon} alt={props.alt} />
            <p className={`font-medium text-[16px] ${props.color}`}>
                {props.title}
            </p>
        </div>

        <p className="font-medium text-[14px] text-[#5A6272]">
            {props.description}
        </p>
      </div>
  
  </>
}

export default ButtomVerification