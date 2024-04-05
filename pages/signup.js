import SignContainer from "../Components/SignContainer";

export default function signup() {
  return (
    <>
      <SignContainer isMemberQ="이미 회원이신가요?" goSign="로그인 하기" goSignURL="/signin" loginBySns="다른 방식으로 가입하기" sign="회원가입" />
    </>
  )
}