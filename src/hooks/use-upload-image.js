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

  const handleUploadButtonClick = (event) => {
    event.preventDefault();

    imageInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const image = event.target.files[0];

    setImage(image);
  };

  const handleImageDrop = (event) => {
    event.preventDefault();

    const images = event.dataTransfer.files;

    const image = validateDroppedImage(images);

    if (image) setImage(image);
  };

  const handleImageDragOver = (event) => {
    event.preventDefault();

    return;
  };

  const handleImageClear = (event) => {
    if (event) event.preventDefault();

    setImage(null);
  };

  return {
    image,
    imageInputRef,
    handleUploadButtonClick,
    handleImageUpload,
    handleImageDrop,
    handleImageDragOver,
    handleImageClear,
  };
};

export default useUploadImage;
