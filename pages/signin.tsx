import { useEffect } from "react";
import SignContainer from "../Components/SignContainer";
import { useRouter } from "next/router";

function Signin() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) router.push("/FolderPage");
  }, []);

  return (
    <>
      <SignContainer
        isMemberQ="회원이 아니신가요?"
        goSign="회원 가입하기"
        goSignURL="/signup"
        loginBySns="소셜 로그인"
        sign="로그인"
      />
    </>
  );
}
export default Signin;
