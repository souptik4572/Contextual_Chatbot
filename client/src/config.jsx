import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Loading } from "react-simple-chatbot";

export const Answer = (props) => {
  console.log(props);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState("");
  const chosenQuestionId = props.previousStep.value.questionId;
  const answer = props.previousStep.value.answer;

  const myFunc = async () => {
    //API CALL
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // answer to asked question (chosenQuestionId)
    // NOTE: We can get this in the previous step itself no need to make an extra call

    setResult(answer);
    setLoading(false);
    // if (no more questions) {
    //   props.triggerNextStep({trigger: 3})
    // }
    props.triggerNextStep({
      value: chosenQuestionId,
    });
  };

  useEffect(() => {
    myFunc();
  }, []);

  return <div>{loading ? <Loading /> : result}</div>;
};

export const Question = (props) => {
  console.log(props);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const chosenQuestionId = props.previousStep.value;

  const myFunc = async () => {
    //API CALL to get Questions
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // If not the first question
    if (chosenQuestionId) {
      //fetch questions where parentFaqId === chosenQuestionId
    } else {
      // fetch questions where parentFaqId === -1 & filter(user, kyc, url/page)
    }
    setResult([
      { value: 101, label: "question 1" },
      { value: 102, label: "question 2" },
      { value: 103, label: "question 3" },
      { value: 104, label: "question 4" },
    ]);
    setLoading(false);
  };

  const renderQuestions = () => {
    console.log("RESULTS: ", result);
    return (
      <List>
        {result.map((question) => {
          return (
            <ListItem
              alignItems="flex-start"
              button
              dense
              divider
              disableGutters
              disablePadding
              key={question.value}
            >
              <ListItemButton
                onClick={() =>
                  props.triggerNextStep({
                    trigger: 2,
                    value: {
                      questionId: question.value,
                      answer: result[question].description,
                    },
                  })
                }
              >
                <ListItemText primary={question.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  };

  useEffect(() => {
    myFunc();
  }, []);

  return <div>{loading ? <Loading /> : renderQuestions()}</div>;
};

// API Reference: https://lucasbassetti.com.br/react-simple-chatbot/#/docs/installation
export const name = "Rishabh";
export const steps = [
         {
           id: "0",
           message: `Hello ${name}! How can I help you?`,
           trigger: "1",
         },
         {
           id: "1",
           waitAction: true,
           component: <Question />,
           trigger: "2",
           asMessage: true,

           // options: [
           //   { value: 1, label: "question 1", trigger: "2" },
           //   { value: 2, label: "question 2", trigger: "2" },
           //   { value: 3, label: "question 3", trigger: "2" },
           //   { value: 4, label: "Thank You", trigger: "3" },
           // ],
         },
         {
           id: "2",
           waitAction: true,
           component: <Answer />,
           trigger: "1",
         },
         {
           id: "3",
           message: "Bye!",
           end: true,
         },
       ];
