import React from "react";

function ButtonIcon(props) {
  const { disabled, onClick, image, imageAlt, children } = props;

  return (
    <button
      className={`button text-boogaloo ${disabled && "button-disabled"}`}
      onClick={onClick}
      disabled={disabled}
    >
      <img src={image} alt={imageAlt} />
      {children}
    </button>
  );
}

export default ButtonIcon;
