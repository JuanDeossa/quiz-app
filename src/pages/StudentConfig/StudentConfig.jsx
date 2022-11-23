import { useEffect, useState } from "react";
import { DropDown } from "../../components/DropDown/DropDown";
import { TemplateComp } from "../../components/TemplateComp/TemplateComp";
import "./style/index.css";

export const StudentConfig = (props) => {
  const [categories, setCategories] = useState([1, 2, 3]);
  const difficulties = [
    { id: 1, name: "Easy", query:"easy" },
    { id: 2, name: "Medium", query:"medium" },
    { id: 3, name: "Hard", query:"hard" },
  ]
  const types = [
    { id: 1, name: "Multiple Choice",query:"multiple" },
    { id: 2, name: "True / False",query:"boolean" },
  ]

  useEffect(() => {
    const getCategoriesFromApi = async (url) => {
      try {
        const response = await fetch(url);
        const { trivia_categories } = await response.json();
        setCategories(trivia_categories);
      } catch (error) {
        console.error(error);
      }
    };
    getCategoriesFromApi("https://opentdb.com/api_category.php");
  }, []);

  return (
    <div>
      <TemplateComp text="Student config" />
      <form action="">
        <DropDown title="Category" dataArray={categories} />
        <DropDown title="Difficulty" dataArray={difficulties} />
        <DropDown title="Type" dataArray={types} />
      </form>
    </div>
  );
}
