import Modal from "../ui/Modal";
import useModal from "../ui/useModal";
import { Button, TopMenuButton } from "../ui/Button";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";


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
    const [userInfo, setUserInfo] = useState("");
    const [refresh, setRefresh] = useState("");

    
    const fetchData = async() => {
        const response = await axios.get("http://localhost:8000/customerinfo");
        setUserInfo(response.data);
    };

    useEffect( ()=>{fetchData()} ,[refresh]);

    const CheckHandler = async (e) =>{
        e.preventDefault();
        setRefresh(!refresh);
    }

    const userinfomap = <Wrapper>
        <div>
            <table>
                <tr>
                    <td>전자우편: </td>
                    <td>{userInfo.email}</td>
                </tr>
                <tr>
                    <td>비밀번호 바꾸기: </td>
                    <td><input type="password" name="pw" /></td>
                </tr>
                <tr>
                    <td>주소: </td>
                    <td><input type="address" name="address" placeholder={userInfo.address} /></td>
                </tr>
                <tr>
                    <td colSpan="2"><button type="submit" onClick={CheckHandler}>수정하기</button></td>
                </tr>
            </table>
        </div>
    </Wrapper>;
    /* let userinfo =
        <Wrapper>
            {userinfomap}
            <Button title="새로고침"onClick={CheckHandler}/>
        </Wrapper>; */

    return (<>
        <Modal show={isShowingModal} onCloseButtonClick={toggleModal} content={userinfomap} subUrl="myaccount" />
        <TopMenuButton title="나의정보" onClick={toggleModal} /></>
    )
}

export default AccMag4Cus;