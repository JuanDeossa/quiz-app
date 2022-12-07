import "./style/index.css";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

export const QuestionsAmountSelector = (props) => {
  const { setAmount,loading } = props;
  const [questionsAmount, setQuestionsAmount] = useState(1);

  const addQuestion = () => {
    const newValue = questionsAmount + 1;
    setQuestionsAmount(newValue);
    setAmount(newValue);
  };
  const delQuestion = () => {
    const newValue = questionsAmount - 1;
    setQuestionsAmount(newValue);
    setAmount(newValue);
  };

  return (
    <>
      <p className="questions-amount__title">Questions amount</p>
      {loading ? (
        <Skeleton variant="rounded" width={210} height={70} />
      ) : (
        <div className="questions-amount__container">
          <button
            className="amount-btn -"
            type="button"
            onClick={delQuestion}
            disabled={questionsAmount <= 1}
          >
            -
          </button>
          <p>{questionsAmount}</p>
          <button
            className="amount-btn +"
            type="button"
            onClick={addQuestion}
            disabled={questionsAmount >= 10}
          >
            +
          </button>
        </div>
      )}
    </>
  );
};
