import "./style/index.css";
import { useContext, useEffect, useRef, useState } from "react";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { DropDown } from "../../components/DropDown/DropDown";
import { TemplateComp } from "../../components/TemplateComp/TemplateComp";
import { getCategoriesFromApi, difficulties } from "../../services/getOptions";
import { getQuizURl } from "../../services/getQuizURL";
import { useLocation, useNavigate } from "react-router-dom";
import { QuestionsAmountSelector } from "../../components/QuestionsAmountSelector/QuestionsAmountSelector";
import { DataContext } from "../../context/DataContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const StudentConfigPage = () => {
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState(1);
  const [studentName, setStudentName] = useLocalStorage("studentName", null);
  const [studentsDB, setStudentsDB] = useLocalStorage("studentsDB", []);
  const difficulties_ = Object.values(difficulties);

  const form = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { setQuestionsStarted } = useContext(DataContext);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const name = formData.get("name");
    const userExists = studentsDB.some((student) => student.name === name);
    if (!name) {
      alert("name required");
    } else if (userExists) {
      alert("you already answered the test");
    } else {
      const categoryID = formData.get("Category");
      const difficulty = formData.get("Difficulty");
      const name = formData.get("name");
      const optionsSelected = {
        categoryID,
        difficulty,
        name,
        amount,
      };
      const url = getQuizURl(optionsSelected);
      setStudentName(name);
      navigate("/question", {
        state: { url: url, previousPath: location.pathname },
      });
      setQuestionsStarted(true);
    }
  };

  const handleAmount = (value) => {
    setAmount(value);
  };

  useEffect(() => {
    const setData = (async () => {
      const categories = await getCategoriesFromApi();
      setCategories(categories);
    })();
  }, []);

  return (
    <div className="StudentConfigPage">
      <h2>Student Config</h2>
      <form action="" ref={form}>
        <DropDown title="Category" dataArray={categories} />
        <DropDown title="Difficulty" dataArray={difficulties_} />
        <QuestionsAmountSelector setAmount={handleAmount} />
        <input type="text" name="name" placeholder="Who are you ?" />
        <SubmitButton text="Start Quiz" action={handleSubmit} />
      </form>
    </div>
  );
};
