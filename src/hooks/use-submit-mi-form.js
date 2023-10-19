import { useState } from "react";
import axios from "axios";

const useSubmitMIForm = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const switchIsLoadingState = () => {
    setIsLoading((prev) => !prev);
  };

  const classifyTaekwondoMovementImage = async (image) => {
    return axios.post(
      "http://localhost:5000/classify-taekwondo-movement-image",
      { image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  const handleFormSubmit = async (event, image) => {
    event.preventDefault();

    switchIsLoadingState();

    const { data } = await classifyTaekwondoMovementImage(image);

    switchIsLoadingState();

    setResult(data);
  };

  const handleResultClear = () => {
    setResult(null);
  };

  return {
    result,
    isLoading,
    handleFormSubmit,
    handleResultClear,
  };
};

export default useSubmitMIForm;
