import axios from "axios";
import { useState } from "react";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

//로그인
  // axios를 이용해 login 요청을 보내고 response.data를 반환하여 request에 넣어준다.

export function loginUser(dataTosubmit) {
  const request = axios
    .post("https://my-homepage-304618.du.r.appspot.com/login", dataTosubmit)
    .then((response) => response.data);
  return {
    //
    type: LOGIN_USER,
    payload: request,
  };
}

//회원가입
export function registerUser(dataTosubmit) {
  const request = axios
    .post("https://my-homepage-304618.du.r.appspot.com/register", dataTosubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function addOrder(dataTosubmit) {
  const request = axios
    .post("https://my-homepage-304618.du.r.appspot.com/menu", dataTosubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function Order(dataTosubmit) {
  const request = axios
    .post("https://my-homepage-304618.du.r.appspot.com/cartnew", dataTosubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export async function useCustomerinfo() {
  const [token, setToken]= useState(null);
  const request = await axios
    .get("https://my-homepage-304618.du.r.appspot.com/customerinfo")
    .then((response) => {
      setToken(response.data);
    }
    );
    return {
      type: REGISTER_USER,
      payload: request,
    };

}

export function changeCustomerinfo(dataTosubmit) {
  const request = axios
    .post("https://my-homepage-304618.du.r.appspot.com/customerinfo", dataTosubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function registerInven(dataTosubmit) {
  const request = axios
    .post("https://my-homepage-304618.du.r.appspot.com/inventory", dataTosubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function registerStatus(dataTosubmit) {
  const request = axios
    .post("https://my-homepage-304618.du.r.appspot.com/prevorder", dataTosubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}
export async function logout(dataTosubmit) {
  const request = await axios
    .post("https://my-homepage-304618.du.r.appspot.com/logout", dataTosubmit)
    .then((response) => response.data);
  return {
    type: AUTH_USER,
    payload: request,
  };
}
//인증처리
export function auth() {
  const request = axios
    .get("https://my-homepage-304618.du.r.appspot.com/auth")
    .then((response) => response.data);
  return {
    type: AUTH_USER,
    payload: request,
  };
}