import Modal from "./Modal";
import useModal from "./useModal";
import Button from "./Button";
import React, { useState } from "react";
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

function Pay() {
    const [isShowingModal, toggleModal] = useModal();

    let pay =
        <Wrapper>
            됐다고 칩시다.
        </Wrapper>;

    return (<>
        <Modal show={isShowingModal} onCloseButtonClick={toggleModal} content={pay} />
        <Button title="결제" onClick={toggleModal} /></>
    )
}

export default Pay;