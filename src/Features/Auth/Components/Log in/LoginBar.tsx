import { NavLink } from 'react-router-dom';


const Bar = ({title}:any) => {
  return (
    <header className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-[28px] text-[#2A2D34] mb-[16px]">
              {title}!
            </h1>
            {/* <nav className="
            flex bg-[#FFFFFF] border-[1px] border-[#6D7588] rounded-[4px] w-[379px] h-[37px] p-[2px]">
              <NavLink
                className="w-[50%] flex justify-center items-center bg-[#DCDFF9] rounded-[4px] text-[12px] font-bold text-[#525FE1] cursor-pointer"
                to={"/login"}
              >
                Log in
              </NavLink>
              <NavLink
                className="w-[50%] flex justify-center items-center text-[12px] font-bold text-[#2A2D34] cursor-pointer"
                to={"/register"}
              >
                Sign up
              </NavLink>
            </nav> */}
          </header>
  );
}

export default Bar;