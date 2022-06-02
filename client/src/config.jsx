import React, { useEffect, useState } from "react";
import { Loading } from "react-simple-chatbot";

export const CustomComponent = (props) => {
  console.log(props);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState("");
  const chosenQuestionId = props.previousStep.value;

  const myFunc = async () => {
    //API CALL
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // answer to asked question (chosenQuestionId)
    // parentFaqId === chosenQuestionId => []

    setResult("ANSWER TO " + chosenQuestionId);
    setLoading(false);

    // if (whatever i got in 2nd step) {
    //   steps.push()
    // }

    props.triggerNextStep();
  };

  useEffect(() => {
    myFunc();
  }, []);

  return <div>{loading ? <Loading /> : result}</div>;
};

// API Reference: https://lucasbassetti.com.br/react-simple-chatbot/#/docs/installation
export const name = "Rishabh";
export const steps = [
  {
    id: "0",
    message: `Hello ${name}! How can I help you?`,
    trigger: "2",
  },
  {
    id: "1",
    options: [
      { value: 1, label: "question 1", trigger: "2" },
      { value: 2, label: "question 2", trigger: "2" },
      { value: 3, label: "question 3", trigger: "2" },
      { value: 4, label: "Thank You", trigger: "3" },
    ],
  },
  {
    id: "2",
    waitAction: true,
    component: <CustomComponent />,
    trigger: "1",
  },
  {
    id: "3",
    message: "Bye!",
    end: true,
  },
];
