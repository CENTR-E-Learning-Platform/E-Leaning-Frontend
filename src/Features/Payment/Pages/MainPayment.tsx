import React from 'react'
import { Outlet } from 'react-router-dom'
import StaticPayment from '../Components/Payment/StaticPayment'

const MainPayment = () => {
  return <>
    <div className="px-[188px] py-[28px]">
        <nav className="text[16px] w-[230px] font-medium leading-[13px] tracking-[0] text-[#5A6272] mb-3">
          Explore Teacher &gt; <span className="text-[#2A2D34]">Payment</span>
        </nav>
        <div className="flex justify-between gap-[30px]">
            <div className="LeftSide">
                <StaticPayment/>
            </div>
            <div className='RightSide'>
                <Outlet/>
            </div>
            
        </div>
    </div>
  </>
}

export default MainPayment