import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { QuestionForm } from "../../components/QuestionForm/QuestionForm";
import { getQuestionFromApi } from "../../services/getQuestion";
import "./style/index.css";

export const QuestionPage = () => {
  const location =useLocation()
  const url = location.state.url
  const[questions,setQuestions]=useState([])

  useEffect(() => {
    const setData = (async()=>{
    const questionsObtained = await getQuestionFromApi(url)
    setQuestions(questionsObtained)
    })()
  },[]);

  return (
    <div>
      <QuestionForm questions={questions}/>
    </div>
  );
};
