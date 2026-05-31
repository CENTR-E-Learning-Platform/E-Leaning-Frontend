import image from "../../../assets/images/Online learning-amico 1.png";
import LoginBar from "../Components/Log in/LoginBar";
import LoginForm from "../Components/Log in/LoginForm";
import logo from "../../../assets/icons/logo.svg";

const MainLogin = () => {

  return (
    <main className="h-[100vh] flex w-full">
      <section className="w-[50%] flex justify-center bg-[#F9FBFC]">
        <article className="flex flex-col items-center justify-center">
          <header className="flex justify-center items-center mb-[3px]">
            <img src={logo} className="w-[150px] h-full" alt="" />
          </header>
          <div>
            <LoginBar title="Welcome back" />
          </div>

          {/* Login Form */}
          <LoginForm />
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
