import Modal from "./Modal";
import useModal from "./useModal";
import { Button, TopMenuButton } from "./Button";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {logout}from "../../_actions/user_action"


function LogOut() {
  const [logout2, setLogout2] = useState("");
//   const fetchData = async() => {
//   const response = await axios.get("https://my-homepage-304618.du.r.appspot.com/customerinfo");
//   setUser(response.data);
// };
// useEffect( ()=>{fetchData()} ,[]);
const fetchData = async() => {
  const response = await axios.get("https://my-homepage-304618.du.r.appspot.com/customerinfo");
  setLogout2(response.data[0]);
};

useEffect( ()=>{fetchData()} ,[]);

const onClickLogout = (e) => {
  e.preventDefault();
  logout(logout2);
  //window.location.reload();
}

  return (
    <TopMenuButton title="로그아웃"  onClick={onClickLogout}/>
  )
}

export default LogOut;