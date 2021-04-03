import axios from "axios";

import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  currentRequest,
  currentSuccess,
  currentError,
} from "./actions";

console.dir(axios);
console.log(axios.defaults.baseURL);
console.log(axios.defaults.headers.common.Authorization);

axios.defaults.baseURL = `https://goit-phonebook-api.herokuapp.com`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(registerRequest());
  axios
    .post("/users/signup", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(registerSuccess(response.data));
    })
    .catch((error) => dispatch(registerError(error.message)));
};

const login = (credentials) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post("/users/login", credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(loginSuccess(response.data));
    })
    .catch((error) => dispatch(loginError(error)));
};

const logOut = () => (dispatch) => {
  dispatch(logOutRequest());
  axios.post("/users/logout").then(() => {
    token.unset();
    dispatch(logOutSuccess()).catch((error) => dispatch(logOutError(error)));
  });
};

const currentUser = (credentials) => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(currentRequest());
  axios.get("/users/current").then((response) => {
    dispatch(currentSuccess(response.data)).catch((error) =>
      dispatch(currentError(error)),
    );
  });
};

export default { register, login, logOut, currentUser };
