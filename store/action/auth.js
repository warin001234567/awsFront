import Axios from "axios";

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

export const login = (userid, password) => {
  return async (dispatch) => {
    const response = await Axios.post("http://localhost:3001/signin", {
      username: userid,
      password: password,
    });

    if (!response.ok) {
      const erResponse = await response.json();
      console.log(erResponse);
    }
    const resData = await response.json();

    console.log(resData);

    dispatch({
      type: LOGIN,
      user: resData.user,
      token: resData.token,
    });
  };
};

export const signup = (userid, password) => {
  return async (dispatch) => {
    const response = await Axios.post("http://localhost:3001/signup", {
      username: userid,
      password: password,
    });

    if (!response.ok) {
      const erResponse = await response.json();
      console.log(erResponse);
    }
    const resData = await response.json();

    console.log(resData);

    dispatch({
      type: SIGNUP,
      user: resData.user,
      token: resData.token,
    });
  };
};
