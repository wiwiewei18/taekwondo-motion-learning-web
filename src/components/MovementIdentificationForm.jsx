import React from "react";

import MIImageInputPage from "./MIImageInputPage";
import MIImagePreviewPage from "./MIImagePreviewPage";
import MIResultPage from "./MIResultPage";

function MovementIdentificationForm(props) {
  const {
    image,
    imageInputRef,
    isLoading,
    result,
    percentageResult,
    onUploadButtonClick,
    onImageUpload,
    onImageDrop,
    onImageDragOver,
    onImageClear,
    onSubmit,
    onRetry,
  } = props;

  return (
    <form onSubmit={onSubmit}>
      {!image && (
        <MIImageInputPage
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
      {result && (
        <MIResultPage
          result={result}
          percentageResult={percentageResult}
          onClick={onRetry}
        />
      )}
    </form>
  );
}

export default MovementIdentificationForm;
