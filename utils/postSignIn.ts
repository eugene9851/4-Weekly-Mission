type TokenType = {
  accessToken: string;
  refreshToken: string;
};

export const postSignIn = async (
  email: string,
  password: string
): Promise<TokenType | undefined> => {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.log(error);
  }
};
