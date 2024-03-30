import Image from 'next/image'
import eyeOn from '../public/images/eye-on.svg'
import eyeOff from '../public/images/eye-off.svg'
import { useState } from 'react'
import styles from '../styles/input.module.css'

//임시 유효성검사 함수
const validateFunc = (input) => {
  return input.length > 4
}

export default function Input({ name, type, value, onChange, placeholder = '' }) {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const inputStyle = isValid ? styles.input : styles.errorInput
  const customType = type === "password" ? (isEyeOpen ? 'text' : 'password') : type;

  const handleChange = (e) => {
    onChange(name, e.target.value)
  }

  const handleEyeClick = () => {
    setIsEyeOpen(!isEyeOpen)
  }

  const handleBlur = (e) => {
    setIsValid(validateFunc(e.target.value))
  }

  return (
    <>
      <input className={inputStyle} name={name} value={value} type={customType}
        onBlur={handleBlur} onChange={handleChange} placeholder={placeholder} />
      {type === "password" &&
        <Image src={eye ? eyeOn : eyeOff} width={16} height={16}
          alt="password-eye" onClick={handleEyeClick} />}
      {!isValid && <div className={styles.error}>내용을 다시 작성해주세요</div>}
    </>
  )
}