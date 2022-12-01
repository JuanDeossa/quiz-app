import "./style/index.css";
import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getQuestionFromApi } from "../../services/getQuestion";
import { getRandomQuestionsArray } from "../../services/getRandomQuestionsArray";
import { decode } from "html-entities";
import { DataContext } from "../../context/DataContext";
import { Button } from "../../components/Button/Button";

export const QuestionPage = () => {
  const { questionsStarted } = useContext(DataContext);
  const location = useLocation();
  const url = location?.state?.url;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [score, setscore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  if (!questionsStarted && !quizCompleted) {
    return <Navigate to={"/quizsettings"} />;
  }
  useEffect(() => {
    const setData = (async () => {
      setLoading(true);
      const questionsObtained = await getQuestionFromApi(url);
      const questionsUpdated = await getRandomQuestionsArray(questionsObtained);
      setQuestions(questionsUpdated);
      setLoading(false);
    })();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = questions.map((question) => {
      const questionsNumber = questions.length;
      if (question.answerSelected === question.correctAnswer) {
        return Number(((1 / questionsNumber) * 100).toFixed(0));
      } else {
        return 0;
      }
    });
    const total = results.reduce((a, b) => a + b, 0);
    setscore(total);
    setQuizCompleted(true);
  };

  const handleAnswer = (e) => {
    const questionId = Number(e.target.id[0]);
    const value = decode(e.target.value);
    const newArray = questions.map((question) => {
      if (question.id == questionId) {
        return {
          ...question,
          answerSelected: value,
          answered: true,
        };
      } else {
        return question;
      }
    });
    setQuestions(newArray);
  };
  console.log(questions);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="questions-container">
          <h2>Questions</h2>
          <div>
            {questions.map((question, index1) => (
              <div key={index1} className="question-container">
                <h3 className="question">{question.question}</h3>
                {question.allAnswers.map((answer, index2) => (
                  <div
                    key={index2}
                    className={`answer-contanier ${
                      !quizCompleted ? "" : answer.isCorrect ? "right" : "wrong"
                    }`}
                  >
                    <label htmlFor={`${index1}${index2}`}>
                      {answer.answer}
                    </label>
                    <input
                      type="radio"
                      value={answer.answer}
                      onChange={handleAnswer}
                      name={index1}
                      id={`${index1}${index2}`}
                      disabled={quizCompleted}
                    />
                  </div>
                ))}
              </div>
            ))}
            {quizCompleted && <p>Score: {score}/100</p>}
            {!quizCompleted ? (
              <button disabled={quizCompleted} onClick={handleSubmit}>
                Send
              </button>
            ) : (
              <Button text="Go Home" route="/" />
            )}
          </div>
        </div>
      )}
    </>
  );
};
