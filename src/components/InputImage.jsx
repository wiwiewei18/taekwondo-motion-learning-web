import React from "react";

import Image from "../assets/image.png";

function InputImage(props) {
  const {
    imageInputRef,
    onClickUploadButton,
    onUploadImage,
    onDropImage,
    onDragOverImage,
  } = props;

  return (
    <div
      className="dropzone text-black"
      onDragOver={onDragOverImage}
      onDrop={onDropImage}
    >
      <img src={Image} alt="image icon" />
      <p>Drag your photo here</p>
      <input
        type="file"
        accept="image/*"
        onChange={onUploadImage}
        hidden
        ref={imageInputRef}
        name="uploadedImage"
      />
      <button className="button" onClick={onClickUploadButton}>
        Select from Computer
      </button>
    </div>
  );
}

export default InputImage;
