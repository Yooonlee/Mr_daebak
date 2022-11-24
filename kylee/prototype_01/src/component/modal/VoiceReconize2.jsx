import Modal from "../ui/Modal";
import useModal from "../ui/useModal";
import styled from "styled-components";
//import SpeechRecognition from 'react-speech-recognition'
import { useState } from "react";
import Dishes from "../database/Dishes.json"
import * as GV from "../GlobalVariable.jsx"

function VoiceReconize2(props) { //props: dishname, toggleModal
    const [isShowingModal, toggleModal] = useModal();

    let msg = `${props[0]}의 음식 형태를 골라주십시오. 보통, 고급, 호화가 있습니다.`;

    function close() {
        toggleModal();
        props[1]();
    }
    return(<Modal show={isShowingModal} onCloseButtonClick={close} content={msg} subUrl="voicereconize" title="음성인식" />);
}

export default VoiceReconize2