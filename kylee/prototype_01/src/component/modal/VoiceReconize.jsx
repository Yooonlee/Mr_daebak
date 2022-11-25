import Modal from "../ui/Modal";
import useModal from "../ui/useModal";
import styled from "styled-components";
//import SpeechRecognition from 'react-speech-recognition'
import { useState } from "react";
import Dishes from "../database/Dishes.json"
import * as GV from "../GlobalVariable.jsx"
import { addOrder } from "../../_actions/user_action"

let dishname = [];
let dishstyle = [];
let firstanswer;
let secondanswer;
let temp;
let msg = "주문하실 음식을 말씀해 주세요.\n취소하려면 아래 닫기를 눌러주세요.";

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

    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const menu = Dishes.map((dish, index) => dish.name);
    const style = Object.values(GV);
    var cloneDeep = require('lodash.clonedeep');

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
        A();
    }
    function A() {
        console.log("a " + final);
        console.log("a " + dishname[0]);
        console.log("a " + dishstyle[0]);
        if (final == '스파게티') {
            dishname.push(final);
            msg = `${dishname[0]}의 형태를 말씀해주세요.\n보통, 고급, 호화가 있습니다.\n취소하려면 아래 닫기를 눌러주세요.`;
            console.log("b " + final);
            console.log("b " + dishname[0]);
            console.log("b " + dishstyle[0]);
        }
        if ((final == '보통' || final == '고급' || final == '호화') && (dishname[0] === '스파게티')) {
            dishstyle.push(final);
            console.log("c " + final);
            console.log("c " + dishname[0]);
            console.log("c " + dishstyle[0]);
            B();
        }
        function B() {
            msg = `${dishname[0]}에 ${dishstyle[0]}로 주문합니다.`;
            setTimeout(() => { toggleModal(); }, 5000);
        }
    }

    if (!isShowingModal) {
        recognition.stop();
    }

    return (<>
        <Modal show={isShowingModal} onCloseButtonClick={toggleModal} content={msg} subUrl="voicereconize" title="음성인식" />
        <Mike onClick={toggleModal}>🎤</Mike>
    </>);
}

export default VoiceReconize;