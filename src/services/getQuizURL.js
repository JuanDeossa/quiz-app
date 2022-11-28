export const getQuizURl=(optionsSelected)=>{
  const {categoryID,difficulty,amount}=optionsSelected
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}`
  return url
}