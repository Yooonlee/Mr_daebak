import React, { useState } from "react";
import Dishes from "../database/Dishes.json"
import { useNavigate, useParams } from "react-router-dom";
import Modal from "./Modal";
import useModal from "./useModal";
import Button from "./Button";

function AddOrder(props) {
    const { dishid } = props;
    const [isShowingModal, toggleModal] = useModal();

    const dish = Dishes.find((item) => { return item.id == dishid; });

    const orderwindow = <>
        <table>
            <tr>
                <td colspan="2"><img src={dish.picture} alt="그림 없음" height="150px" /></td>
            </tr>
            <tr>
                <td>{dish.name}</td>
                <td>{dish.price}</td>
            </tr>
            <tr>
                <td colspan="2">{dish.description}</td>
            </tr>
            <tr>
                <td><select name="style">
                    <option value="simple">간단</option>
                    <option value="grand">보통</option>
                    <option value="delux">호화</option>
                </select>
                </td>
                <td>갯수: <input type="text" name="amount" /></td>
            </tr>
        </table><br />
        <Button title="장바구니 넣기" onClick={toggleModal} /></>;

    return (<>
        <Modal show={isShowingModal} onCloseButtonClick={toggleModal} content={orderwindow} />
        <Button title="주문" onClick={toggleModal} /></>
    );
}

export default AddOrder;