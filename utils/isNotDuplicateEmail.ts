export const isNotDuplicateEmail = async (value: string) => {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: value }),
      }
    );
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.log(error);
  }
};
