import React from "react";

import MIInputImagePage from "./MIInputImagePage";
import MIImagePreviewPage from "./MIImagePreviewPage";

import useUploadImage from "../hooks/use-upload-image";
import useSubmitMIForm from "../hooks/use-submit-mi-form";

function MovementIdentificationForm(props) {
  const {
    image,
    imageInputRef,
    isLoading,
    result,
    onUploadButtonClick,
    onImageUpload,
    onImageDrop,
    onImageDragOver,
    onImageClear,
    onSubmit,
  } = props;

  return (
    <form onSubmit={onSubmit}>
      {!image && (
        <MIInputImagePage
          imageInputRef={imageInputRef}
          onUploadButtonClick={onUploadButtonClick}
          onImageUpload={onImageUpload}
          onImageDrop={onImageDrop}
          onImageDragOver={onImageDragOver}
        />
      )}
      {image && !result && (
        <MIImagePreviewPage
          image={URL.createObjectURL(image)}
          isLoading={isLoading}
          onImageClear={onImageClear}
        />
      )}
      {result && <p className="result">{result}</p>}
    </form>
  );
}

export default MovementIdentificationForm;
