import React from "react";
import { Link } from "react-router";
import logo from '../../../../assets/icons/logo.svg';
import email_Config from "../../../../assets/images/EmailConfig.png";
import { useRegContext } from "../../Contexts/RegContext";
import { useConfirmEmail } from "../../Hooks/useConfirmEmail";

const VerifyFail = () => {
  const { userData } = useRegContext();
  const { refetch, isLoading } = useConfirmEmail(userData?.email || "");

  const handleResend = () => {
    refetch();
  };

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
                    className="w-10 h-10 text-[#F44336]" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <h2 className="text-[29px] font-bold leading-[20.390625px] text-[#2A2D34]">
                    Verification Link Expired
                  </h2>
                </div>

                <section className="h-[90px] w-[640px] mt-[20px] mb-[10px]">
                  <p className="text-[17px] leading-[155%] font-normal text-gray-900 mb-1">
                    The verification link sent to <span className="font-semibold">{userData?.email}</span> has expired. <br />
                    Please request a new verification link to continue.
                  </p>
                </section>

                <div className="flex items-center w-[425px] gap-5 justify-start">
                  <button
                    onClick={handleResend}
                    disabled={isLoading}
                    type="button"
                    className="w-[230px] text-[14px] p-1 font-medium cursor-pointer h-[36.6px] bg-[#525FE1] text-[#fff] border border-[#525FE1] rounded-[8px]"
                  >
                    {isLoading ? "Sending..." : "Resend confirmation email"}
                  </button>
                  <Link
                    to="/register"
                    className="w-[178.6px] text-[14px] flex items-center justify-center cursor-pointer h-[36.6px] text-[#525FE1] border border-[#525FE1] rounded-[8px]"
                  >
                    Create new account
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
              alt="Failed Illustration"
            />
          </aside>
        </div>
      </main>
    </React.Fragment>
  );
};

export default VerifyFail;