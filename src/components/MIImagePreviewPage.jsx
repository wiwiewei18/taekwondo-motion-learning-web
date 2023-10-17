import React from "react";

import ArrowLeft from "../assets/arrow-left.png";

function MIImagePreviewPage(props) {
  const { image, onClearImage, loading } = props;

  return (
    <div className="image-preview">
      <section className="image-preview-header">
        <button onClick={onClearImage}>
          <img src={ArrowLeft} alt="arrow left icon" />
        </button>
        <p>Preview</p>
        <button type="submit">{loading ? "Loading.." : "Identify"}</button>
      </section>
      <section className="image-preview-content">
        <img src={image} alt="preview image" />
      </section>
    </div>
  );
}

export default MIImagePreviewPage;
