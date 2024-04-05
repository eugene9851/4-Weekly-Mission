import Image from "next/image";
import eyeOn from "../public/images/eye-on.svg";
import eyeOff from "../public/images/eye-off.svg";
import { useState } from "react";
import styles from "../styles/input.module.css";
import {
  FieldError,
  UseFormRegisterReturn,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

export default function Input({
  name,
  type,
  placeholder = "",
  register,
  error,
}: InputProps) {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const inputStyle = error ? styles.errorInput : styles.input;
  const customType =
    type === "password" ? (isEyeOpen ? "text" : "password") : type;

  const handleEyeClick = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  return (
    <div className={styles.inputLine}>
      <input
        className={inputStyle}
        type={customType}
        placeholder={placeholder}
        {...register}
      />
      {type === "password" && (
        <Image
          src={isEyeOpen ? eyeOn : eyeOff}
          width={16}
          height={16}
          alt="password-eye"
          onClick={handleEyeClick}
          className={styles.eyeToggle}
        />
      )}
    </div>
  );
}
