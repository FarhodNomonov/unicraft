import axios from "axios";

export const _URL = "https://app.mooby5.com/api/";
const accessJWT = () => localStorage.getItem("token");

// User me

export const getUserMe = async (navigate) => {
  const { data } = await axios
    .get(_URL + "auth/me", {
      headers: {
        "x-access-token": accessJWT(),
        "Content-Type": "application/json",
      },
    })
    .catch(({ response }) => {
      if (!response?.data?.auth) {
        localStorage.removeItem("token");
        navigate("/login");
        window.location.reload();
      }
    });

  return data ?? [];
};
