import Modal from "../ui/Modal";
import useModal from "../ui/useModal";
import { Button, TopMenuButton } from "../ui/Button";
import React, { useState } from "react";
import {registerUser}from "../../_actions/user_action"
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [isShowingModal, toggleModal] = useModal();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
 
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
    }
  const onAddressHandler = (event) => {
    setAddress(event.currentTarget.value);
  }
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }
  const onClickRegister = (event) => {
      
    event.preventDefault();
    let body = {
      email: Email,
      password: Password,
      address: Address,
    }
      registerUser(body);
      window.location.reload();
  }
  let signupform =
    <form>
      아이디: <input type="text" name="email" value={Email} onChange={onEmailHandler}/><br />
      비밀번호: <input type="password" name="pw" value={Password} onChange={onPasswordHandler}/><br />
      주소: <input type="address" name="address"  value={Address} onChange={onAddressHandler}/><br />
      <button type='button' onClick={onClickRegister}>회원가입</button>
    </form>
  return (<>
    <Modal show={isShowingModal} onCloseButtonClick={toggleModal} content={signupform} subUrl="register" title="회원 가입" />
    <TopMenuButton title="회원 가입" onClick={toggleModal} /></>
  )
}

export default SignUp;
