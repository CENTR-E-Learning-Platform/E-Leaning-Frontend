import React from "react";

import email_Config from "../../../../assets/images/EmailConfig.png";
import { useRegContext } from "../../Contexts/RegContext";
const EmailConfig = () => {
  const { userData } = useRegContext();
  return (
    <React.Fragment>
      <main className="w-screen h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <section className="flex items-start justify-center">
            <div className="w-[450px]">
              <header className="flex justify-center items-center">
                <h1 className="mt-[34.453125px] font-semibold text-[32px] text-[#2A2D34]">
                  logo
                </h1>
              </header>

              <article className="flex flex-col  items-center justify-center">
                <h2 className="text-[29px] mt-[160px] font-bold leading-[20.390625px] text-[#2A2D34]">
                  Confirm your email to continue
                </h2>

                <section className="h-[90px] mt-[20px] mb-[10px]">
                  <p className="text-[17px] w-[425px] leading-[155%] font-normal text-gray-900 mb-1">
                    We’ve sent an email to {userData?.email} <br />
                    Confirm this is correct by clicking the link in the email.
                  </p>

                  <p className="text-[12.7px] w-[425px] leading-[155%] font-normal">
                    Didn’t get an email? Check your spam folder or request
                    another email.
                  </p>
                </section>

                <div className="flex items-center w-[425px] gap-5 justify-start">
                  <button
                    type="button"
                    className="w-[220.8px] font-medium cursor-pointer h-[36.6px] bg-[#525FE1] text-[#fff] border border-[#525FE1] rounded-[8px]"
                  >
                    Resend confirmation email
                  </button>
                  <button
                    type="button"
                    className="w-[178.6px] cursor-pointer h-[36.6px] text-[#525FE1] border border-[#525FE1] rounded-[8px]"
                  >
                    Create new account
                  </button>
                </div>
              </article>
            </div>
          </section>

          <aside
            style={{
              background:
                "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",
            }}
            className="flex h-full items-center justify-center"
          >
            <img
              className="h-[450px] w-[450px]"
              src={email_Config}
              alt="Illustration of student page"
            />
          </aside>
        </div>
      </main>
    </React.Fragment>
  );
};

export default EmailConfig;
