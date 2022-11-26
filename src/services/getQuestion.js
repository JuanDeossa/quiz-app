export const getQuestionFromApi = async (url) => {
  try {
    const response = await fetch(url);
    const { results } = await response.json();
    console.log(results);
    return results
  } catch (error) {
    console.error(error);
  }
}
