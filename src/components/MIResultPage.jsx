import React from "react";

function MIResultPage(props) {
  const { result, percentageResult, onClick } = props;

  return (
    <div className="result text-black">
      <p className="percentage">{percentageResult.toFixed(2)}%</p>
      <b className="result-text">{result}</b>
      <button className="button" onClick={onClick}>
        Try Again
      </button>
    </div>
  );
}

export default MIResultPage;
