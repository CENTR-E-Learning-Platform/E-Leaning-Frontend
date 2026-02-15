import UpcomingEvents from "./UpcomingEvents"


const Upcoming =()=> {
  return (
    <>
        <div className="w-[265px] mt-[40px] ">
            <h1 className="text-[18px] text-[#2A2D34] font-semibold">Upcoming events</h1>
            <h1 className="text-[#6D7588] text-[16px] font-medium mt-[24px] mb-[16px]">October 27</h1>
            <UpcomingEvents />
        </div>
    </>
  )
}

export default Upcoming