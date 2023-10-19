import React from "react";

import ArrowLeft from "../assets/arrow-left.png";

function MIImagePreviewPage(props) {
  const { image, isLoading, onImageClear } = props;

  return (
    <div className="image-preview">
      <section className="image-preview-header">
        <button onClick={onImageClear}>
          <img src={ArrowLeft} alt="arrow left icon" />
        </button>
        <p>Preview</p>
        <button type="submit">{isLoading ? "Loading.." : "Identify"}</button>
      </section>
      <section className="image-preview-content">
        <img src={image} alt="preview image" />
      </section>
    </div>
  );
}

export default MIImagePreviewPage;
