import { decode } from "html-entities"

export const getRandomQuestionsArray=(questionsArray)=>{
  const questionsV2=questionsArray.map(question=>{
    const answersArray=[
      {answer:decode(question.correct_answer),isCorrect:true},
      ...question.incorrect_answers.map(answer=>({answer:decode(answer),isCorrect:false}))
    ]
    return{
      ...question,
      question:decode(question.question),
      allAnswers:answersArray.sort(()=>Math.random()-0.5)
    }
  })
  return questionsV2
}