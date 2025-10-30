import image from "../../../../assets/images/Enter OTP-rafiki.png";
import left_arrow from "../../../../assets/icons/mingcute_left-line.png";
import { usehandlePaste, useOTP, useOTPHandler } from "../../Hooks/useOTP";

const OTP = () => {
  const formik = useOTP();
  const { inputRef, handleChange, handelKeyBack, BackLogin } =
    useOTPHandler(formik);
  const { handlePaste } = usehandlePaste();

  return (
    <main className="h-[100vh] flex w-full">
      <section className="w-[50%] flex justify-center bg-[#F9FBFC]">
        <article className="flex flex-col items-center justify-center">
          <header className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-[28px] text-[#2A2D34]">Enter OTP</h1>
            <p className="text-[#2A2D34] text-[13px]">
              Enter the 5-digit code sent to you
            </p>
          </header>

          <section className="mt-[12px]">
            <form onSubmit={formik.handleSubmit}>
              <fieldset className="mb-[12px] mt-[5px] flex justify-center items-center gap-[16px]">
                <legend className="sr-only">Enter 5 digit OTP</legend>
                {Array.from({ length: 5 }).map((_, i) => (
                  <input
                    key={i}
                    name={`otp[${i}]`}
                    className="w-[36px] h-[36px] text-center border-[#6D7588] border-[1px] rounded-[4px] focus:outline-none focus:ring-1 focus:ring-[#2A2D34]"
                    type="text"
                    inputMode="numeric"
                    onPaste={
                      i === 0
                        ? (e) => {
                            handlePaste(e, inputRef, formik);
                          }
                        : undefined
                    }
                    aria-label={`Digit ${i + 1}`}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handelKeyBack(e, i)}
                    maxLength={1}
                    ref={(el) => {
                      inputRef.current[i] = el;
                    }}
                  />
                ))}
              </fieldset>

              <button
                className="font-semibold text-[#F9FBFC] cursor-pointer text-[14px] w-[379px] h-[36px] bg-[#525FE1] rounded-[4px] mt-[13px]"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Continue
              </button>
            </form>

            <button
              onClick={BackLogin}
              className="cursor-pointer flex justify-center items-center mt-[9px] text-[#2A2D34] w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px]"
            >
              <img
                className="w-[17px] me-[5px]"
                src={left_arrow}
                alt="Back arrow"
              />
              <p className="text-[13px] text-[#525FE1] font-semibold">
                Back to log in
              </p>
            </button>

            <footer className="flex justify-center mt-[12px]">
              <p className="text-[13px] text-[#2A2D34]">
                Didn’t you receive any code?{" "}
                <span className="ms-[1px] text-[#525FE1] underline cursor-pointer text-[13px]">
                  Click to resend
                </span>
              </p>
            </footer>
          </section>
        </article>
      </section>

      <aside
        style={{
          background: "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",
        }}
        className="w-[50%] flex justify-center items-center"
      >
        <img className="w-[450px]" src={image} alt="OTP illustration" />
      </aside>
    </main>
  );
};

export default OTP;
