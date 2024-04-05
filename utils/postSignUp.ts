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
    console.log("res", response);
    const responseData = await response.json();
    console.log("response", responseData);
    return responseData.data.data;
  } catch (error) {
    console.log(error);
  }
};
