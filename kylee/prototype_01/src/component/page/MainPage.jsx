import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DishMenuList from "../ui/DishMenuList";
import Dishes from "../database/Dishes.json"
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import useModal from "../ui/useModal";
import "../ui/Modal.css";
import LogIn from "../modal/LogIn";
import LogOut from "../ui/LogOut";
import SignUp from "../modal/SignUp";
import PrevOrderList from "../modal/PrevOrderList";
import Cart from "../modal/Cart";
import AccMag4Cus from "../modal/AccountManagement4Customer";
import EmployeePage from "./EmployeePage";
import account from "../database/Account.json"
import {useCustomerinfo} from "../../_actions/user_action" 
import axios from "axios";


const TopMenu = styled.div`
    padding: 16px;
    width: clac(100% - 32px);
    background-color: red;
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: center;
`;

const MainPageMenuList = styled.div`
    padding-top: 50px;
    width: 80%;
    margin-left:auto; 
    margin-right:auto;
    margin-bottom:100px;
`;

function MainPage(props) {
    const { } = props;
    const [user, setUser] = useState("");
    const [refresh, setRefresh] = useState("");

    const CheckHandler = async (e) =>{
        e.preventDefault();
        setRefresh(!refresh);
    }

    //const navigate = useNavigate();
    const fetchData = async() => {
        const response = await axios.get("http://localhost:8000/customerinfo");
        setUser(response.data);
    };

    useEffect( ()=>{fetchData()} ,[refresh]);

    return (
        <>
            <TopMenu>
                { user.token?  <><PrevOrderList /><Cart /><AccMag4Cus /><LogOut /></> : <><LogIn /><SignUp /></>}
                <Button title="확인"onClick={CheckHandler}/>
            </TopMenu>
            { user.role === 0 ? <TopMenu><EmployeePage /></TopMenu> : <></>}
            <MainPageMenuList>
                <DishMenuList dishes={Dishes} />
            </MainPageMenuList>
        </>
    )
}

export default MainPage;