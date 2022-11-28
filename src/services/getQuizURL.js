export const getQuizURl=(optionsSelected)=>{
  const {categoryID,difficulty}=optionsSelected
  const url = `https://opentdb.com/api.php?amount=10&category=${categoryID}&difficulty=${difficulty}`
  return url
}