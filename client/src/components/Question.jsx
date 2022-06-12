import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Loading } from "react-simple-chatbot";
import { useSelector, useDispatch } from "react-redux";
import { getAllFaqs } from "../redux";

const Question = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const chosenQuestionId = props.previousStep.value;
  const path = props.path;

  const { data: filteredFaqs } = useSelector((state) => state.faq);
  const dispatch = useDispatch();

  const myFunc = async () => {
    // If not the first Faq
    if (chosenQuestionId) {
      //fetch questions where parentFaqId === chosenQuestionId
      let currentFaqs = await dispatch(
        getAllFaqs({ parentFaqId: chosenQuestionId })
      );
      if (currentFaqs.length === 0) {
        currentFaqs = await dispatch(getAllFaqs({}));
      }
      setResult(currentFaqs);
    } else {
      // fetch questions where parentFaqId === -1 & filter(user, kyc, url/page using path)
      console.log(path);
      if (filteredFaqs.length === 0) {
        let currentFaqs = await dispatch(getAllFaqs({}));
        setResult(currentFaqs);
      }
    }
    setLoading(false);
  };

  const renderQuestions = () => {
    return (
      <List>
        {result.map((anFaq) => {
          return (
            <ListItem
              alignItems="flex-start"
              button
              dense
              divider
              disableGutters
              disablePadding
              key={anFaq.id}
            >
              <ListItemButton
                onClick={() =>
                  props.triggerNextStep({
                    trigger: 2,
                    value: {
                      questionId: anFaq.id,
                      answer: anFaq.description,
                    },
                  })
                }
              >
                <ListItemText primary={anFaq.question} />
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

export default Question;
