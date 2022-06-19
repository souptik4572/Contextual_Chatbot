import React, { useEffect } from "react";

const Answer = (props) => {
  const { questionId, answer } = props.previousStep.value;

  const myFunc = async () => {
    props.triggerNextStep({
      value: questionId,
    });
  };
  useEffect(() => {
    myFunc();
  }, []);

  return <div>{answer}</div>;
};

export default Answer;
