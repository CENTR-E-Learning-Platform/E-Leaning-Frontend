import React from "react";

import email_Config from "../../../../assets/images/EmailConfig.png";
import { useRegContext } from "../../Contexts/RegContext";
import { Link } from "react-router";
import { useConfirmEmail } from "../../Hooks/useConfirmEmail";
const EmailConfig = () => {
  const { userData } = useRegContext();
  const { refetch , data , error , isLoading } = useConfirmEmail(userData?.email || "");

  if (error) {
    console.log(error.message);
  }
  if (data) {
    console.log(data.data);
  }

  const handleResend = () => {
    refetch();
  };

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

              <article className="flex flex-col w-[640px] items-start justify-center">
                <h2 className="text-[29px] mt-[160px] font-bold leading-[20.390625px] text-[#2A2D34]">
                  Confirm your email to continue
                </h2>
                
                <section className="h-[90px] w-[640px] mt-[20px] mb-[10px]">
                  <p className="text-[17px] leading-[155%] font-normal text-gray-900 mb-1">
                    We’ve sent an email to {userData?.email} <br />
                    Confirm this is correct by clicking the link in the email.
                  </p>

                  <p className="text-[12.7px] leading-[155%] font-normal">
                    Didn’t get an email? Check your spam folder or request
                    another email.
                  </p>
                </section>

                <div className="flex items-center w-[425px] gap-5 justify-start">
                  <button
                    onClick={handleResend}
                    disabled={isLoading}
                    type="button"
                    className="w-[230px] p-1 font-medium cursor-pointer h-[36.6px] bg-[#525FE1] text-[#fff] border border-[#525FE1] rounded-[8px]"
                  >
                    {isLoading ? "Sending..." : "Resend confirmation email"}

                  </button>
                  <Link
                    to = "/register"
                    className="w-[178.6px] flex items-center justify-center cursor-pointer h-[36.6px] text-[#525FE1] border border-[#525FE1] rounded-[8px]"
                  >
                    Create new account
                  </Link>
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
