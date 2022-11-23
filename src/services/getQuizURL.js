export const getQuizURl=(optionsSelected)=>{
  const {categoryID,difficulty,type}=optionsSelected
  const url = `https://opentdb.com/api.php?amount=10&category=${categoryID}&difficulty=${difficulty}&type=${type}`
  return url
}

//https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=mult optionsSelected