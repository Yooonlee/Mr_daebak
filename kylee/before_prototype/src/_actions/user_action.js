import axios from "axios";
import { useState } from "react";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

//로그인
  // axios를 이용해 login 요청을 보내고 response.data를 반환하여 request에 넣어준다.

export function loginUser(dataTosubmit) {
  console.log(dataTosubmit)
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
  console.log(dataTosubmit)
  const request = axios
    .post("https://my-homepage-304618.du.r.appspot.com/menu", dataTosubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function Order(dataTosubmit) {
  console.log(dataTosubmit)
  const request = axios
    .post("https://my-homepage-304618.du.r.appspot.com/cart", dataTosubmit)
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
      console.log(token);
    }
    );
    return {
      type: REGISTER_USER,
      payload: request,
    };

}
export function registerInven(dataTosubmit) {
    console.log("registerInven 호출")
    console.log(dataTosubmit)
  // const request = axios
  //   .post("https://my-homepage-304618.du.r.appspot.com/menu", dataTosubmit)
  //   .then((response) => response.data);
  // return {
  //   type: REGISTER_USER,
  //   payload: request,
  // };
}

export function registerStatus(dataTosubmit) {
  // console.log("registerStatus 호출")
  console.log(dataTosubmit)
// const request = axios
//   .post("https://my-homepage-304618.du.r.appspot.com/menu", dataTosubmit)
//   .then((response) => response.data);
// return {
//   type: REGISTER_USER,
//   payload: request,
// };
}
export function logout() {
  const request = axios
    .get("https://my-homepage-304618.du.r.appspot.com/logout")
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