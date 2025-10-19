// src/features/auth/components/PasswordInput.tsx
import { useState } from "react";
import { LockKeyhole } from "lucide-react";
import eye_icon from "../../../../assets/icons/flowbite_eye-outline.png";
import skip_eye_icon from "../../../../assets/icons/icons8-eye-24 (1).png";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
}

const PasswordInput = ({ value, onChange, onBlur, error, touched }: PasswordInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col relative mt-[5px]">
      <label htmlFor="password" className="text-[#2A2D34] text-[14px] font-semibold">
        Password
      </label>
      <input
        id="password"
        name="password"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={show ? "text" : "password"}
        placeholder="Your password"
        className={`w-[379px] h-[36px] rounded-[4px] pl-[35px] pr-5 border-[1px] focus:outline-none ${
          touched && error
            ? "border-red-600"
            : touched && !error
            ? "border-[#525FE1]"
            : "border-[#6D7588]"
        }`}
      />
      <LockKeyhole className="absolute left-[10px] top-[28px] w-[17px] text-[#2A2D34]" />
      <img
        src={show ? eye_icon : skip_eye_icon}
        onClick={() => setShow(!show)}
        className="absolute left-[350px] top-[30px] cursor-pointer w-[17px]"
        alt="toggle visibility"
      />
      {touched && error && <p className="text-red-600 text-[12px]">{error}</p>}
    </div>
  );
};

export default PasswordInput;
