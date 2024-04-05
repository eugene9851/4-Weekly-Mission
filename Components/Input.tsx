import Image from "next/image";
import eyeOn from "../public/images/eye-on.svg";
import eyeOff from "../public/images/eye-off.svg";
import { useState } from "react";
import styles from "../styles/input.module.css";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  // name: string;
  type: string;
  // value: string;
  // onChange: (name: string, value: string) => void;
  placeholder: string;
  register: UseFormRegisterReturn;
  error: FieldError;
  // isValid: boolean;
  // onBlur: (name: string, value: string) => void;
}

export default function Input({
  // name,
  type,
  // value,
  // onChange,
  placeholder = "",
  register,
  error,
}: InputProps) {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  console.log("err", error);
  const inputStyle = error ? styles.errorInput : styles.input;
  const customType =
    type === "password" ? (isEyeOpen ? "text" : "password") : type;

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   onChange(name, e.target.value);
  // };

  // const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
  //   onBlur(name, e.target.value);
  // };

  const handleEyeClick = () => {
    setIsEyeOpen(!isEyeOpen);
  };

  return (
    <div className={styles.inputLine}>
      <input
        className={inputStyle}
        // name={name}
        // value={value}
        type={customType}
        // onBlur={handleBlur}
        // onChange={handleChange}
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
      {/* {!isValid && !value.trim() && name === "email" && (
        <div className={styles.error}>이메일을 입력해주세요.</div>
      )}
      {!isValid && value.trim() && name === "email" && (
        <div className={styles.error}>올바른 이메일 주소가 아닙니다.</div>
      )}
      {!isValid && !value.trim() && name === "pw" && (
        <div className={styles.error}>비밀번호를 입력해주세요.</div>
      )}
      {!isValid && value.trim() && name === "pw" && (
        <div className={styles.error}>
          비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.
        </div>
      )}
      {!isValid && name === "pwValid" && (
        <div className={styles.error}>비밀번호가 일치하지 않아요.</div>
      )} */}
    </div>
  );
}
