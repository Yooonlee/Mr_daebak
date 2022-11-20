import React, { useState, useEffect } from "react";
import Dishes from "../database/Dishes.json"
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../ui/Modal";
import useModal from "../ui/useModal";
import Button from "../ui/Button";
import {addOrder}from "../../_actions/user_action"
import { useLocation } from 'react-router-dom';

function AddOrder(props) {
    const { dishid } = props;
    const [isShowingModal, toggleModal] = useModal();

    const [dishCount, setDishCount] = useState(1);
    const dishPlusOne = () => {
        setDishCount((prev) => prev + 1);
    }
    const dishMinusOne = () => {
        setDishCount((prev) => prev - 1);
    }

    const [selectedStyle, setSelectedStyle] = useState("simple");
    const handleChange = (event) => {
        setSelectedStyle(event.target.value)
    }
    const dish = Dishes.find((item) => { return item.id == dishid; });
    const onClickAddorder = (event) => {
        event.preventDefault();
        let sum = eval("dish.price" + selectedStyle)
        let body = {
         dinnerMenu: dish.name,
         price: sum,
         dinnerStyle: selectedStyle,
         num: dishCount
        }
        console.log(body)
        addOrder(body).payload
        .then(alert('장바구니 등록 완료하였습니다.') )
        .catch(err => {
            console.log(err);
          });
    }
    const orderwindow =
    <table width="400px">
    <tr>
        <td><img src={dish.picture} alt="그림 없음" height="150px" /></td>
    </tr>
    <tr>
        <td>음식 이름: {dish.name}</td>
    </tr>
    <tr>
        <td>가격: {eval("dish.price" + selectedStyle)}원</td>
    </tr>
    <tr>
        <td>{dish.descriptioncommon}</td>
    </tr>
    <tr>
        <td>{eval("dish.description" + selectedStyle)}</td>
    </tr>
    <tr>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>
            <fieldset>
                <legend>음식 형태</legend>
                <input type="radio" value="simple" onClick={handleChange} checked={selectedStyle == "simple"} />보통
                <input type="radio" value="grand" onClick={handleChange} checked={selectedStyle == "grand"} />고급
                <input type="radio" value="delux" onClick={handleChange} checked={selectedStyle == "delux"} />호화
            </fieldset>

        </td>
    </tr>
    <tr>
        <td>개수: <button onClick={dishMinusOne} disabled={dishCount <= 1}>-</button>{dishCount}<button onClick={dishPlusOne}>+</button></td>
    </tr>
    <tr>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td><Button title="장바구니 넣기" onClick={onClickAddorder} /></td>
    </tr>  
        </table>;

    return (<>
        
        <Modal show={isShowingModal} onCloseButtonClick={toggleModal} content={orderwindow}/>
        <Button title="주문" onClick={toggleModal} /></>
    );
}

export default AddOrder;