import { useState } from "react";
import axios from "axios";

const useSubmitMIForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { image } = props;

  const updateLoading = () => {
    setLoading((prev) => !prev);
  };

  const classifyImage = async () => {
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

  const onSubmit = async (event) => {
    event.preventDefault();

    updateLoading();

    const { data } = await classifyImage();

    updateLoading();

    setResult(data);
  };

  const onClearResult = () => {
    setResult(null);
  };

  return {
    loading,
    result,
    onSubmit,
    onClearResult,
  };
};

export default useSubmitMIForm;
