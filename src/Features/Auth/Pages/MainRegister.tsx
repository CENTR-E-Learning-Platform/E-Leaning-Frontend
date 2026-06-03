// src/features/auth/pages/MainRegister.tsx
import image from "../../../assets/images/Online learning-amico 1.png";
import RegisterForm from "../Components/Register/RegisterForm";
import RegisterBar from "../Components/Register/RegisterBar";
import logo from "../../../assets/icons/logo.svg";

const MainRegister = () => {
  return (
    <main className="h-[100vh] flex w-full">
      <section className="w-[50%] flex justify-center bg-[#F9FBFC]">
        <div className="flex flex-col items-center justify-center">
          <header className="flex justify-center items-center mb-[3px]">
            <img src={logo} className="w-[150px] h-full" alt="" />
          </header>
          <RegisterBar title="Create New Account" />
          <div >
            <RegisterForm />
          </div>
        </div>
      </section>

      <aside
        style={{
          background: "linear-gradient(to bottom, #CBCFF6 10%, #525FE1 90%)",
        }}
        className="w-[50%] flex justify-center items-center"
      >
        <img className="w-[450px]" src={image} alt="Online learning" />
      </aside>
    </main>
  );
};

export default MainRegister;
