import ReactDOM from 'react-dom';
import React from "react";
import Button from "./Button";

const Modal = ({ show, content, onCloseButtonClick}) => {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-wrapper">
      <div className="modal">
        <div className="body">
          {content}
          <br /><br /><br />
        </div>
        <div className="footer">
          <button onClick={onCloseButtonClick}>닫기</button>
        </div>
      </div>
    </div>
    , document.body
  );
};

export default Modal;
