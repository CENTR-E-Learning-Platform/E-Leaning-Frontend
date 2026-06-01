import image from "../../../../assets/images/Forgot password-amico.png";
import left_arrow from "../../../../assets/icons/mingcute_left-line.png";
import { useSendEmail } from "../../Hooks/useforgetpasswordAndSendemail";
import { CircleUserRound } from "lucide-react";

const ForgetPassword = () => {
  const { formik } = useSendEmail();

  return (
    <main className="h-[100vh] flex w-full">
      <section className="w-[50%] flex justify-center bg-[#F9FBFC]">
        <article className="flex flex-col items-center justify-center">
          <header className="flex flex-col justify-center items-center mb-[11px]">
            <h1 className="font-bold text-[28px] text-[#2A2D34]">
              Forget password?
            </h1>
            <p className="text-[#2A2D34] text-[13px]">
              No worries, we’ll send you reset instructions
            </p>
          </header>

          <section className="mt-[12px]">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col relative">
                <label
                  htmlFor="email"
                  className="text-[#2A2D34] text-[14px] font-semibold"
                >
                  Email
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  id="email"
                  name="email"
                  className={`w-[379px] h-[36px] rounded-[4px] pl-[35px] pr-5 border-[1px] focus:outline-none ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-600"
                      : formik.touched.email && formik.errors.email
                      ? "border-[#525FE1]"
                      : "border-[#6D7588]"
                  }`}
                  type="email"
                  placeholder="Your email"
                />
                <CircleUserRound className="absolute left-[10px] top-[27px] w-[17px] text-[#2A2D34]" />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-600 text-[12px]">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              <button
                className="font-semibold text-[#F9FBFC] cursor-pointer text-[14px] w-[379px] h-[36px] bg-[#525FE1] rounded-[4px] mt-[13px]"
                type="submit"
              >
                Send
              </button>
            </form>

            <button
              type="button"
              onClick={() => window.location.href = "/login"}
              className="cursor-pointer flex justify-center items-center mt-[9px] text-[#2A2D34] w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px]"
            >
              <img
                className="w-[17px] me-[5px]"
                src={left_arrow}
                alt="Back arrow"
              />
              <span className="text-[13px] text-[#525FE1] font-semibold">
                Back to log in
              </span>
            </button>
          </section>
        </article>
      </section>

      <aside
        style={{
          background: "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",
        }}
        className="w-[50%] flex justify-center items-center"
      >
        <img
          className="w-[450px]"
          src={image}
          alt="Forgot password illustration"
        />
      </aside>
    </main>
  );
};

export default ForgetPassword;
