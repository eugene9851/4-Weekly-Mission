// Sign-in
import Input from '../Components/Input'
import { useState } from 'react';

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const PW_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/

// const validateEmail = (email) => {
//   return EMAIL_REGEX.test(email)
// }

// const validatePassword = (pw) => {
//   return PW_REGEX.test(pw)
// }

export default function Form() {
  const [userInput, setUserInput] = useState({
    email: '',
    pw: '',
    pwValid: ''
  })

  const [isValid, setIsValid] = useState({
    email: false,
    pw: false,
    pwValid: false
  })


  const handleInputChange = (name, value) => {
    setUserInput({
      ...userInput,
      [name]: value,
    })
  }

  return (
    <form>
      <label htmlFor='email'>이메일</label>
      <Input name='email' type='email' value={userInput.email} onChange={handleInputChange} placeholder='이메일 입력' isValid={isValid} />

      <label htmlFor='pw'>비밀번호</label>
      <Input name='pw' type='password' value={userInput.pw} onChange={handleInputChange} placeholder='비밀번호 입력' isValid={isValid} />

      <label htmlFor='pwValid'>비밀번호 확인</label>
      <Input name="pwValid" type='password' value={userInput.pwValid} onChange={handleInputChange} placeholder='비밀번호 확인 입력' isValid={isValid} />
    </form>
  )
}