import image from "../../assets/images/Forgot password-amico.png";
import name_icon from "../../assets/icons/ix_user-profile.png";
import left_arrow from "../../assets/icons/mingcute_left-line.png";

const ForgetPassword = () => {
  return (
    <main className="h-[100vh] flex w-full">
      {/* Left Section (Form) */}
      <section className="w-[50%] flex justify-center bg-[#F9FBFC]">
        <article className="flex flex-col items-center justify-center">
          {/* Header */}
          <header className="flex flex-col justify-center items-center mb-[11px]">
            <h1 className="font-bold text-[28px] text-[#2A2D34]">
              Forget password?
            </h1>
            <p className="text-[#2A2D34] text-[13px]">
              No worries, we’ll send you reset instructions
            </p>
          </header>

          {/* Form */}
          <section className="mt-[12px]">
            <form>
              {/* Email Input */}
              <div className="flex flex-col relative">
                <label
                  htmlFor="email"
                  className="text-[#2A2D34] text-[14px] font-semibold"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="w-[379px] h-[36px] border-[#6D7588] border-[1px] rounded-[4px] pl-[35px] pb-[2px] pr-5 focus:outline-none focus:ring-1 focus:ring-[#2A2D34]"
                  type="email"
                  placeholder="Your email"
                  required
                />
                <img
                  src={name_icon}
                  className="absolute left-3 top-[39px] -translate-y-1/2 w-[17px]"
                  alt="User icon"
                />
              </div>

              {/* Reset Button */}
              <button
                className="font-semibold text-[#F9FBFC] cursor-pointer text-[14px] w-[379px] h-[36px] bg-[#525FE1] rounded-[4px] mt-[13px]"
                type="submit"
              >
                Reset password
              </button>
            </form>

            {/* Back to login */}
            <button
              type="button"
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

      {/* Right Section (Illustration) */}
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
