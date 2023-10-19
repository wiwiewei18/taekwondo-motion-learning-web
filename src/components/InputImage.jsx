import React from "react";

import Image from "../assets/image.png";

function InputImage(props) {
  const {
    imageInputRef,
    onUploadButtonClick,
    onImageUpload,
    onImageDrop,
    onImageDragOver,
  } = props;

  return (
    <div
      className="input-image text-black"
      onDragOver={onImageDragOver}
      onDrop={onImageDrop}
    >
      <img src={Image} alt="image icon" />
      <p>Drag your photo here</p>
      <input
        type="file"
        accept="image/*"
        onChange={onImageUpload}
        hidden
        ref={imageInputRef}
        name="uploadedImage"
      />
      <button className="button" onClick={onUploadButtonClick}>
        Select from Computer
      </button>
    </div>
  );
}

export default InputImage;
