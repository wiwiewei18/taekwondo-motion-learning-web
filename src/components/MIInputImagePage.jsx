import React from "react";

import InputImage from "./InputImage";

function MIInputImagePage(props) {
  const {
    imageInputRef,
    onClickUploadButton,
    onUploadImage,
    onDropImage,
    onDragOverImage,
  } = props;

  return (
    <InputImage
      imageInputRef={imageInputRef}
      onClickUploadButton={onClickUploadButton}
      onUploadImage={onUploadImage}
      onDropImage={onDropImage}
      onDragOverImage={onDragOverImage}
    />
  );
}

export default MIInputImagePage;
