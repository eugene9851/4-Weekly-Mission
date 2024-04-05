import SignContainer from "../Components/SignContainer";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Signup() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) router.push("/FolderPage");
  }, []);

  return (
    <>
      <SignContainer
        isMemberQ="이미 회원이신가요?"
        goSign="로그인 하기"
        goSignURL="/signin"
        loginBySns="다른 방식으로 가입하기"
        sign="회원가입"
      />
    </>
  );
}
