import axios from "axios";
import { showLoading, hideLoading } from "react-redux-loading";
import store from "../store";

const globalAxios = axios.create({
  baseURL: "http://localhost:4000/",
});

globalAxios.interceptors.request.use(
  function (config) {
    store.dispatch(showLoading());
    return config;
  },
  function (error) {
    store.dispatch(hideLoading());
    return Promise.reject(error);
  }
);

globalAxios.interceptors.response.use(
  function (response) {
    store.dispatch(hideLoading());
    return response;
  },
  function (error) {
    store.dispatch(hideLoading());
    return Promise.reject(error);
  }
);

export default globalAxios;
