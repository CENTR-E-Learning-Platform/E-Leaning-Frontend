import image from "../../../../assets/images/Online learning-amico 1.png";

import { NavLink } from "react-router-dom";

const MainLogin = () => {

  return (
    <main className="h-[100vh] flex w-full">
      <section className="w-[50%] flex justify-center bg-[#F9FBFC]">
        <article className="flex flex-col items-center justify-center">
          <header className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-[28px] text-[#2A2D34] mb-[16px]">
              Welcome back!
            </h1>
            <nav className="flex bg-[#FFFFFF] border-[1px] border-[#6D7588] rounded-[4px] w-[379px] h-[37px] p-[2px]">
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
            </nav>
          </header>

          {/* Login Form */}
          
        </article>
      </section>

      <aside
        style={{
          background: "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",
        }}
        className="w-[50%] flex justify-center items-center"
      >
        <img className="w-[450px]" src={image} alt="Login illustration" />
      </aside>
    </main>
  );
};

export default MainLogin;
