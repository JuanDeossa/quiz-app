import { decode } from "html-entities";

export const getRandomQuestionsArray = (questionsArray) => {
  const questionsV2 = questionsArray?.map((question, index) => {
    const answersArray = [
      {
        answer: decode(question?.correct_answer),
        isCorrect: true,
        isChecked: false,
      },
      ...question?.incorrect_answers?.map((answer) => ({
        answer: decode(answer),
        isCorrect: false,
        isChecked: false,
      })),
    ];
    return {
      id: index,
      difficulty: question?.difficulty,
      category: question?.category?.replaceAll("Entertainment: ",""),
      correctAnswer: decode(question?.correct_answer),
      answerSelected: null,
      question: decode(question?.question),
      allAnswers: answersArray.sort(() => Math.random() - 0.5),
    };
  });
  return questionsV2;
};
