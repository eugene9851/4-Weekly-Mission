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
    console.log("res", response);
    const responseData = await response.json();
    console.log("response", responseData);
    return responseData.data.data;
    // localStorage.setItem('accessToken', responseData.data.accessToken)
  } catch (error) {
    console.log(error);
  }
};
// .then((result) => {
//   const tokens = result.data.data;
//   console.log("tokens", tokens);
//   return {
//     accessToken: tokens.accessToken,
//     refreshToken: tokens.refreshToken,
//   };
// })
// .catch((error) => console.log(error));
// }
