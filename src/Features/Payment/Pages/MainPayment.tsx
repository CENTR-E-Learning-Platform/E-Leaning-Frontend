import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import StaticPayment from '../Components/Payment/StaticPayment'

const MainPayment = () => {
  return <>
    <div className="px-[188px] py-[28px]">
      <nav className="text[16px] w-[230px] font-medium leading-[13px] tracking-[0] text-[#5A6272] mb-3">
        <NavLink to={'/Home'} >Home</NavLink> &gt; <span className="text-[#2A2D34]">Payment</span>
      </nav>
      <div className="flex justify-center items-center gap-[30px] ">
        <div className="LeftSide">
          {/* <StaticPayment/> */}
        </div>
        <div className=''>
          <Outlet />
        </div>

      </div>
    </div>
  </>
}

export default MainPayment