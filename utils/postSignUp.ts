type TokenType = {
  accessToken: string;
  refreshToken: string;
};

export const postSignUp = async (
  email: string,
  password: string,
  pwValid: string
): Promise<TokenType | undefined> => {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, pwValid }),
    });
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.log(error);
  }
};
