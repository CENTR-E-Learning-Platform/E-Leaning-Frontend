import React from "react";
import { Link } from "react-router";
import logo from '../../../../assets/icons/logo.svg';
import email_Config from "../../../../assets/images/EmailConfig.png";

const VerifySuccess = () => {
  return (
    <React.Fragment>
      <main className="w-screen h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <section className="flex items-start justify-center">
            <div className="w-[450px]">
              <header className="flex justify-center items-center mt-[150px]">
                <img src={logo} className="w-[150px] h-full" alt="logo" />
              </header>

              <article className="flex flex-col w-[640px] items-start justify-center">
                <div className="mt-[100px] flex items-center gap-3">
                  <svg 
                    className="w-10 h-10 text-[#4CAF50]" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h2 className="text-[29px] font-bold leading-[20.390625px] text-[#2A2D34]">
                    Email Verified Successfully
                  </h2>
                </div>

                <section className="h-[90px] w-[640px] mt-[20px] mb-[10px]">
                  <p className="text-[17px] leading-[155%] font-normal text-gray-900 mb-1">
                    Your email has been verified successfully. <br />
                    You can now log in to your account and start using our platform.
                  </p>
                </section>

                <div className="flex items-center w-[425px] gap-5 justify-start">
                  <Link
                    to="/login"
                    className="w-[230px] text-[14px] flex items-center justify-center font-medium cursor-pointer h-[36.6px] bg-[#525FE1] text-[#fff] border border-[#525FE1] rounded-[8px]"
                  >
                    Go to Login
                  </Link>
                </div>
              </article>
            </div>
          </section>

          <aside
            style={{
              background: "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",
            }}
            className="flex h-full items-center justify-center"
          >
            <img
              className="h-[450px] w-[450px]"
              src={email_Config}
              alt="Success Illustration"
            />
          </aside>
        </div>
      </main>
    </React.Fragment>
  );
};

export default VerifySuccess;