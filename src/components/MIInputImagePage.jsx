import React from "react";

import InputImage from "./InputImage";

function MIInputImagePage(props) {
  const {
    imageInputRef,
    onUploadButtonClick,
    onImageUpload,
    onImageDrop,
    onImageDragOver,
  } = props;

  return (
    <InputImage
      imageInputRef={imageInputRef}
      onUploadButtonClick={onUploadButtonClick}
      onImageUpload={onImageUpload}
      onImageDrop={onImageDrop}
      onImageDragOver={onImageDragOver}
    />
  );
}

export default MIInputImagePage;
