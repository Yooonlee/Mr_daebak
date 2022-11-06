import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DishMenuList from "../ui/DishMenuList";
import Dishes from "../database/Dishes.json"
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import useModal from "../ui/useModal";
import "../ui/Modal.css";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import SignUp from "./SignUp";
import PrevOrderList from "../ui/PrevOrderList";
import Cart from "../ui/Cart";
import AccMag4Cus from "../ui/AccountManagement4Customer";
import EmployeePage from "./EmployeePage";

const Wrapper = styled.div`
    padding: 16px;
    width: clac(100% - 32px);
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function MainPage(props) {
    const { } = props;
    //const navigate = useNavigate();

    return (
        <>
            <LogIn />
            <SignUp />
            <PrevOrderList />
            <Cart />
            <AccMag4Cus />
            <Wrapper>
                <Container>
                    <DishMenuList dishes={Dishes} />
                </Container>
            </Wrapper>
            <EmployeePage />
        </>
    )
}

export default MainPage;