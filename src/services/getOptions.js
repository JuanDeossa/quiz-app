export const getCategoriesFromApi = async (url="https://opentdb.com/api_category.php") => {
  try {
    const response = await fetch(url);
    const { trivia_categories } = await response.json();

    const trivia_categories2= await trivia_categories.map(category=>{
      const newName= category.name.replaceAll('Entertainment: ','')
      return {...category,name:newName}
    })

    return trivia_categories2
  } catch (error) {
    console.error(error);
  }
}

export const difficulties = {
  easy:{ id: 1, name: "Easy", query: "easy" },
  medium:{ id: 2, name: "Medium", query: "medium" },
  hard:{ id: 3, name: "Hard", query: "hard" },
}
