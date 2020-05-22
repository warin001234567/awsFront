import Axios from "axios";

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

export const login = (userid, password) => {
  return async (dispatch) => {
    await Axios.post("http://localhost:3001/signin", {
      username: userid,
      password: password,
    })
      .then(async function (response) {
        console.log(response.data);
        dispatch({
          type: LOGIN,
          user: response.user,
          token: response.token,
        });
      })
      .catch(function (error) {
        console.log("Unable to login!!");
      });
  };
};

export const signup = (userid, password) => {
  return async (dispatch) => {
    await Axios.post("http://localhost:3001/signup", {
      username: userid,
      password: password,
    })
      .then(async function (response) {
        console.log(response);
        dispatch({
          type: SIGNUP,
          user: response.user,
          token: response.token,
        });
      })
      .catch(function (error) {
        console.log("Unable to signup!!");
        console.log(error);
      });
  };
};
