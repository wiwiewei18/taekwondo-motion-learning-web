import React from "react";

import Close from "../assets/close.png";

function PopUp(props) {
  const { isModalShow, onClick, children } = props;

  return (
    <div className={`popup ${isModalShow && "popup-show"}`}>
      <button className="popup-close" onClick={onClick}>
        <img src={Close} alt="close icon" />
      </button>
      <div className="popup-modal">{children}</div>
    </div>
  );
}

export default PopUp;
