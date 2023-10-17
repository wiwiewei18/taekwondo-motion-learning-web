import React from "react";

import MIInputImagePage from "./MIInputImagePage";
import MIImagePreviewPage from "./MIImagePreviewPage";

import useUploadImage from "../hooks/use-upload-image";
import useSubmitMIForm from "../hooks/use-submit-mi-form";

function MovementIdentificationForm(props) {
  const {
    image,
    imageInputRef,
    onClickUploadButton,
    onUploadImage,
    onDropImage,
    onDragOverImage,
    onClearImage,
    loading,
    result,
    onSubmit,
  } = props;

  return (
    <form onSubmit={onSubmit}>
      {!image && (
        <MIInputImagePage
          imageInputRef={imageInputRef}
          onClickUploadButton={onClickUploadButton}
          onUploadImage={onUploadImage}
          onDropImage={onDropImage}
          onDragOverImage={onDragOverImage}
        />
      )}
      {image && !result && (
        <MIImagePreviewPage
          image={URL.createObjectURL(image)}
          onClearImage={onClearImage}
          loading={loading}
        />
      )}
      {result && <p className="result">{result}</p>}
    </form>
  );
}

export default MovementIdentificationForm;
