import Image from "next/image";
import logo from "../public/images/logo.svg";
import styles from "../styles/signContainer.module.css";
import Link from "next/link";
import Input from "./Input";
import google from "../public/images/google.svg";
import kakao from "../public/images/kakao.svg";
import { useForm } from "react-hook-form";
import { postSignIn } from "../utils/postSignIn";
import { useRouter } from "next/router";

interface signContainerProps {
  isMemberQ: string;
  goSign: string;
  goSignURL: string;
  loginBySns: string;
  sign: string;
}

function SignContainer({
  isMemberQ,
  goSign,
  goSignURL,
  loginBySns,
  sign,
}: signContainerProps) {
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const PW_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const router = useRouter();

  const handleOnSubmit = async (data: any) => {
    console.log("data", data);
    const tokenData = await postSignIn(data.email, data.password);
    console.log("token", tokenData);
    if (tokenData) {
      localStorage.setItem("accessToken", tokenData.accessToken);
      localStorage.setItem("refreshToken", tokenData.refreshToken);
      router.push("/FolderPage");
    }
  };

  const emailRegister = register("email", {
    required: {
      value: true,
      message: "이메일을 입력해주세요.",
    },
    pattern: {
      value: EMAIL_REGEX,
      message: "올바른 이메일 주소가 아닙니다.",
    },
  });

  const passwordRegister = register("password", {
    required: {
      value: true,
      message: "비밀번호를 입력해주세요.",
    },
    pattern: {
      value: PW_REGEX,
      message: "비밀번호를 확인해주세요.",
    },
  });

  const passwordValidRegister = register("pwValid", {
    required: true,
    pattern: {
      value: PW_REGEX,
      message: "비밀번호가 일치하지 않아요.",
    },
  });

  return (
    <div className={styles.outfit}>
      <div className={styles.container}>
        <div>
          <Image src={logo} width={210} height={38} alt="logo" />
          <div className={styles.description}>
            {isMemberQ}
            <span className={styles.goSign}>
              <Link href={goSignURL}>{goSign}</Link>
            </span>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
          <div className={styles.inputArea}>
            <label htmlFor="email" className={styles.label}>
              이메일
            </label>
            <Input
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요"
              register={emailRegister}
              error={errors.email}
            />
            <div className={styles.error}>
              {errors.email?.message?.toString()}
            </div>
          </div>

          <div className={styles.inputArea}>
            <label htmlFor="password" className={styles.label}>
              비밀번호
            </label>
            <Input
              name="password"
              type="password"
              placeholder={
                goSignURL === "/signup"
                  ? "비밀번호를 입력해주세요"
                  : "영문, 숫자를 조합해 8자 이상 입력해주세요"
              }
              register={passwordRegister}
              error={errors.password}
            />
            <div className={styles.error}>{errors.pw?.message?.toString()}</div>
          </div>

          {goSignURL === "/signin" && (
            <div className={styles.inputArea}>
              <label htmlFor="pwValid" className={styles.label}>
                비밀번호 확인
              </label>
              <Input
                name="pwValid"
                type="password"
                placeholder="비밀번호와 일치하는 값을 입력해주세요"
                register={passwordValidRegister}
                error={errors.pwValid}
              />
              <div className={styles.error}>
                {errors.pwValid?.message?.toString()}
              </div>
            </div>
          )}

          <button type="submit" className={styles.button}>
            {sign}
          </button>
        </form>

        <div className={styles.socialArea}>
          <div className={styles.socialLogin}>{loginBySns}</div>
          <div className={styles.sns}>
            <Link href="https://www.google.com">
              <Image src={google} width={34} height={34} alt="구글" />
            </Link>
            <Link href="https://www.kakaocorp.com/page">
              <Image src={kakao} width={34} height={34} alt="카카오" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignContainer;
