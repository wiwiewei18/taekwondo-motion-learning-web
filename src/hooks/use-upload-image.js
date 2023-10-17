import { useRef, useState } from "react";

const useUploadImage = () => {
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  const validateDroppedImage = (images) => {
    const image = images[0];

    if (images.length > 1) {
      return window.alert("Failed!, cannot upload multiple files");
    }

    if (image.type.split("/")[0] !== "image") {
      return window.alert("Failed!, cannot upload file others than image");
    }

    return image;
  };

  const onClickUploadButton = (event) => {
    event.preventDefault();

    imageInputRef.current.click();
  };

  const onUploadImage = (event) => {
    const image = event.target.files[0];

    console.log("raw", event.target.files);

    setImage(image);
  };

  const onDropImage = (event) => {
    event.preventDefault();
    const images = event.dataTransfer.files;

    const image = validateDroppedImage(images);

    if (image) setImage(image);
  };

  const onDragOverImage = (event) => {
    event.preventDefault();

    return;
  };

  const onClearImage = (event) => {
    if (event) event.preventDefault();

    setImage(null);
  };

  return {
    image,
    imageInputRef,
    onClickUploadButton,
    onUploadImage,
    onDropImage,
    onDragOverImage,
    onClearImage,
  };
};

export default useUploadImage;
