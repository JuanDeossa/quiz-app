import "./style/index.css";
import {decode} from 'html-entities'
export const QuestionForm = (props) => {
  const { questions } = props;
  return (
    <div>
      <h2>Questions</h2>
      {questions.map((question,index) => (
        <div key={index} className="question-container">
          <h3>{decode(question.question)}</h3>
          <div className="answer-contanier">
            <label htmlFor="1">{decode(question.correct_answer)}</label>
            <input type="checkbox" name="" id="1" />
          </div>
          <div className="answer-contanier">
            <label htmlFor="2">{decode(question.incorrect_answers[0])}</label>
            <input type="checkbox" name="" id="2" />
          </div>
          <div className="answer-contanier">
            <label htmlFor="3">{decode(question.incorrect_answers[1])}</label>
            <input type="checkbox" name="" id="3" />
          </div>
          <div className="answer-contanier">
            <label htmlFor="4">{decode(question.incorrect_answers[2])}</label>
            <input type="checkbox" name="" id="4" />
          </div>
        </div>
      ))}
    </div>
  );
};