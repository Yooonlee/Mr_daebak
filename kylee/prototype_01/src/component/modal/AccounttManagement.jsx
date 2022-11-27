import Modal from "../ui/Modal";
import useModal from "../ui/useModal";
import { Button, TopMenuButton } from "../ui/Button";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import {changeCustomerinfo}from "../../_actions/user_action"


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: space-around;
    
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;





function AccMag4Cus() {
    const [isShowingModal, toggleModal] = useModal();
    const [user, setUser] = useState("");
    const [refresh, setRefresh] = useState("");
    // const [formdata, setFormdata] = useState({
    //     emailOri:"",
    //     email : "",
    //     address : "",
    // });
    // const { email, address } = formdata; // 비구조화 할당을 통해 값 추출

    const [selectedEmail, setSelectedEmail] = useState("");
    const [selectedAddress, setAddressStatus] = useState("");
    
    const CheckHandler = async (e) =>{
        e.preventDefault();
        setRefresh(!refresh);
    };
    
    // const handleChange = (event) => {
    //     const {name, value} = event.target;
    //     setFormdata({   
    //             ...formdata,
    //         [name] : value,
    //     });
    // };

    const onEmailStatusHandler = (event) => {
        setSelectedEmail(event.currentTarget.value)
        }
    const onAddressStatusHandler = (event) => {
        setAddressStatus(event.currentTarget.value)
        }

    const fetchData = async() => {
        const response = await axios.get("https://my-homepage-304618.du.r.appspot.com/allcustomerinfo");
        setUser(response.data);
    };
    useEffect( ()=>{fetchData()} ,[refresh]);
    console.log(user);
    const userinfomap = Object.values(user)?.map((value)  => {
        const onClickChange = (event) => {
            event.preventDefault();
            let body = {
                emailOri: value.email,
                email: selectedEmail,
                address: selectedAddress,
                }
                changeCustomerinfo(body) 
           }
        
        return(<div>
            <table>
                <tr>
                    <td>이름</td>
                    <td>{value.email}</td>
                </tr>
                <tr>
                    <td>이름 변경</td>
                    <td><input type="text" name="email"  
                    onChange = {onEmailStatusHandler} /></td>
                </tr>
                <tr>
                    <td>주소</td>
                    <td>{value.address}</td>
                </tr>
                <tr>
                    <td>주소 변경</td>
                    <td><input type="text" name="address" 
                    onChange = {onAddressStatusHandler} /></td>
                </tr>
                <tr>
                    <td colSpan="4"><Button title="수정하기" onClick = {onClickChange}/></td>
                </tr>
            </table>
        </div>)
    })
    let userinfo =
        <Wrapper>
            {userinfomap}
            <Button title="새로고침"onClick={CheckHandler}/>
        </Wrapper>;

    return (<>
        <Modal show={isShowingModal} onCloseButtonClick={toggleModal} content={userinfo} title="모든 계정 관리"  />
        <TopMenuButton title="모든고객 정보" onClick={toggleModal} /></>
    )
}

export default AccMag4Cus;