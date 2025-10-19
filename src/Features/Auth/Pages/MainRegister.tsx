// src/features/auth/pages/MainRegister.tsx
import image from "../../../assets/images/Online learning-amico 1.png";
import RegisterForm from "../Components/Register/RegisterForm";
import FacebookButton from "../Components/Shared/FacebookButton";
import RegisterBar from "../Components/Register/RegisterBar";

const MainRegister = () => {
  return (
    <main className="h-[100vh] flex w-full">
      <section className="w-[50%] flex justify-center bg-[#F9FBFC]">
        <div className="flex flex-col items-center justify-center">
          <RegisterBar title="Create New Account" />
          <div className="mt-[12px]">
            <RegisterForm />
            <FacebookButton />
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
