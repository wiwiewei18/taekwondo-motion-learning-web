import React from "react";

import ArrowLeft from "../assets/arrow-left.png";

function MIImagePreviewPage(props) {
  const { image, isLoading, onImageClear } = props;

  return (
    <div className="image-preview">
      <section className="header">
        <div>
          <button onClick={onImageClear}>
            <img src={ArrowLeft} alt="arrow left icon" />
          </button>
        </div>
        <div>
          <p>Preview</p>
        </div>
        <div>
          <button type="submit">{isLoading ? "Loading.." : "Identify"}</button>
        </div>
      </section>
      <section className="content">
        <img src={image} alt="preview image" />
      </section>
    </div>
  );
}

export default MIImagePreviewPage;
