export const getCategoriesFromApi = async (url="https://opentdb.com/api_category.php") => {
  try {
    const response = await fetch(url);
    const { trivia_categories } = await response.json();
    return trivia_categories
  } catch (error) {
    console.error(error);
  }
}

export const difficulties = {
  easy:{ id: 1, name: "Easy", query: "easy" },
  medium:{ id: 2, name: "Medium", query: "medium" },
  hard:{ id: 3, name: "Hard", query: "hard" },
}
export const types = {
  multipleChoice:{ id: 1, name: "Multiple Choice", query: "multiple" },
  booleanChoice:{ id: 2, name: "True / False", query: "boolean" },
}