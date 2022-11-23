import Modal from "../ui/Modal";
import useModal from "../ui/useModal";
import styled from "styled-components";
//import SpeechRecognition from 'react-speech-recognition'
import { useState } from "react";
import Dishes from "../database/Dishes.json"
import * as GV from "../GlobalVariable.jsx"
import { addOrder } from "../../_actions/user_action"
import VoiceReconize2 from "./VoiceReconize2";

var _ = require('lodash');

function VoiceReconize() {
    const Mike = styled.button`
position: fixed;
bottom: 20px;
background-color: transparent;
margin-left: auto;
margin-right: auto;
font-size: 5rem;
font-weight: bold;
height: 10rem;
width: 10rem;
border-radius: 5rem;
:hover {
transform: scale(1.2);
background-color: #50bcdf;
}
`;

    const [isShowingModal, toggleModal] = useModal();
    //const [msg, setMsg] = useState("주문하실 음식을 말씀해 주세요.");
    const [final, setFinal] = useState("");
    const [isEnd, setIsEnd] = useState(false);
    let dishname = '';
    let dishstyle = '';
    let firstanswer = "";
    let secondanswer = "";
    let temp = '';
    let msg = <div>주문하실 음식을 말씀해 주세요.</div>;
    let qone = false;
    let qtwo = false;

    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const menu = Dishes.map((dish, index) => dish.name);
    const style = Object.values(GV);

    var recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'ko-KR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function (event) {
        setFinal(event.results[0][0].transcript);
    }

    if (isShowingModal) {
        recognition.start();
        console.log(temp, dishname, dishstyle);

        if (final == '스파게티') {
            temp = _.cloneDeep(final);
            if(dishname != '스파게티') {dishname = _.cloneDeep(temp)};
            console.log(temp, dishname, dishstyle);
            VoiceReconize2(dishname, toggleModal);
        }
    }
    

    if (!isShowingModal) { recognition.stop(); };

    //const voicereconize = msg;

    return (<>
        <Modal show={isShowingModal} onCloseButtonClick={toggleModal} content={msg} subUrl="voicereconize" title="음성인식" />
        <Mike onClick={toggleModal}>🎤</Mike>
    </>);
}

export default VoiceReconize;