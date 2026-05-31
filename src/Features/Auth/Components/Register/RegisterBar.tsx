import { NavLink } from "react-router-dom"

const RegisterBar = ({title}:any) => {
  return (
         <header className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-[28px] text-[#2A2D34] mb-[16px]">
              {title}
            </h1>
            {/* <nav className="flex bg-[#FFFFFF] border border-[#6D7588] rounded-[4px] w-[379px] h-[37px] p-[2px]">
              <NavLink
                to={"/login"}
                className="w-[50%] flex justify-center items-center text-[12px] font-bold text-[#2A2D34]"
              >
                Log in
              </NavLink>
              <NavLink
                to={"/register"}
                className="w-[50%] flex justify-center items-center bg-[#DCDFF9] rounded-[4px] text-[12px] font-bold text-[#525FE1]"
              >
                Sign up
              </NavLink>
            </nav> */}
          </header>

  )
}

export default RegisterBar