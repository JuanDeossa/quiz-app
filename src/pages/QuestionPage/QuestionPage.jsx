import "./style/index.css";
import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getQuestionFromApi } from "../../services/getQuestion";
import { getRandomQuestionsArray } from "../../services/getRandomQuestionsArray";
import { decode } from "html-entities";
import { DataContext } from "../../context/DataContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

export const QuestionPage = () => {
  const { questionsStarted, setQuestionsStarted } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();
  const url = location?.state?.url;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useLocalStorage("questions", []);
  const [score, setscore] = useLocalStorage("score", 0);
  const [quizCompleted, setQuizCompleted] = useLocalStorage(
    "quizCompleted",
    false
  );
  const [studentName, setStudentName] = useLocalStorage("studentName", null);
  const [studentsDB, setStudentsDB] = useLocalStorage("studentsDB", []);
  const [emptyAnswers, setEmptyAnswers] = useLocalStorage(
    "emptyAnswers",
    false
  );
  //Redirection to settings
  if (
    !questionsStarted &&
    !quizCompleted &&
    location?.state?.previousPath !== "/quizsettings"
  ) {
    return <Navigate to={"/quizsettings"} />;
  }
  useEffect(() => {
    const setData = (async () => {
      setLoading(true);
      if (!questions.length) {
        const questionsObtained = await getQuestionFromApi(url);
        const questionsUpdated = await getRandomQuestionsArray(
          questionsObtained
        );
        setQuestions(questionsUpdated);
      }
      setLoading(false);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const someEmptyAnswer = questions.some(
      (question) => !question.answerSelected
    );
    if (someEmptyAnswer) {
      await setEmptyAnswers(true);
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      const results = questions.map((question) => {
        const questionsNumber = questions.length;
        if (question.answerSelected === question.correctAnswer) {
          return Number(((1 / questionsNumber) * 100).toFixed(0));
        } else {
          return 0;
        }
      });
      const total = results.reduce((a, b) => a + b, 0);
      await setscore(total);
      await setQuizCompleted(true);
      await setEmptyAnswers(false);

      await setStudentsDB([
        ...studentsDB,
        { name: studentName, score: total, aproved: total >= 60 },
      ]);

      window.scrollTo(0, document.body.scrollHeight);
    }
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
          allAnswers: [
            ...question.allAnswers.map((answer) => {
              if (answer.answer === value) {
                return {
                  ...answer,
                  isChecked: true,
                };
              } else {
                return {
                  ...answer,
                  isChecked: false,
                };
              }
            }),
          ],
        };
      } else {
        return question;
      }
    });
    setQuestions(newArray);
  };

  const handleExit = () => {
    setQuestionsStarted(false);
    setQuizCompleted(false);
    setQuestions([]);
    setStudentName(null);
    navigate("/");
  };
  // if (questions.length) {
  //   console.log(questions);
  // }
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
                    <div className="answer-state-container">
                      {quizCompleted ? null : (
                        <input
                          type="radio"
                          value={answer.answer}
                          onChange={handleAnswer}
                          name={index1}
                          id={`${index1}${index2}`}
                          disabled={quizCompleted}
                          checked={answer.isChecked}
                        />
                      )}

                      {!quizCompleted ? null : answer.isCorrect &&
                        answer.isChecked ? (
                        <IoIosCheckmarkCircleOutline />
                      ) : (
                        <IoIosCloseCircleOutline />
                      )}
                    </div>
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
              <button onClick={handleExit}>Go Home</button>
            )}
            {emptyAnswers && (
              <p className="empty-answers-text">
                All questions checking required
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
