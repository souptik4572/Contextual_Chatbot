import React, { useEffect, useState } from "react";
import { Loading } from "react-simple-chatbot";

const Answer = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState("");
  const { questionId, answer } = props.previousStep.value;

  const myFunc = async () => {
    setResult(answer);
    setLoading(false);
    props.triggerNextStep({
      value: questionId,
    });
  };
  useEffect(() => {
    myFunc();
  }, []);

  return <div>{loading ? <Loading /> : result}</div>;
};

export default Answer;
