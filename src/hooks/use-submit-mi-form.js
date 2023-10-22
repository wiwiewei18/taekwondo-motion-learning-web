import { useState } from "react";
import axios from "axios";

const useSubmitMIForm = () => {
  const [result, setResult] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const switchIsLoadingState = () => {
    setIsLoading((prev) => !prev);
  };

  const classifyTaekwondoMovementImage = async (image) => {
    return axios.post(
      `https://wiwiewei18-taekwondo-motion-learning.hf.space/classify-taekwondo-movement-image`,
      { image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  const handleFormSubmit = async (event, image) => {
    try {
      event.preventDefault();

      switchIsLoadingState();

      const { data } = await classifyTaekwondoMovementImage(image);

      switchIsLoadingState();

      setResult(data.result);
      setPercentage(data.percentage);
    } catch (error) {
      switchIsLoadingState();

      return window.alert("Something went wrong!");
    }
  };

  const handleResultClear = () => {
    setResult(null);
  };

  return {
    result,
    percentage,
    isLoading,
    handleFormSubmit,
    handleResultClear,
  };
};

export default useSubmitMIForm;
