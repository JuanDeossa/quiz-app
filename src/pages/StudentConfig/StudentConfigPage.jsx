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

export const StudentConfigPage = () => {
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState(1);
  const difficulties_ = Object.values(difficulties);

  const form = useRef(null);
  const navigate = useNavigate();
  const location=useLocation()
  const {setQuestionsStarted} = useContext(DataContext)

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const optionsSelected = {
      categoryID: formData.get("Category"),
      difficulty: formData.get("Difficulty"),
      amount: amount,
    };
    const url = getQuizURl(optionsSelected);
    navigate("/question", { state: { url: url,previousPath:location.pathname } });
    setQuestionsStarted(true)
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
    <div>
      <TemplateComp text="Student config" />
      <form action="" ref={form}>
        <DropDown title="Category" dataArray={categories} />
        <DropDown title="Difficulty" dataArray={difficulties_} />
        <QuestionsAmountSelector setAmount={handleAmount} />
      </form>
      <SubmitButton text="Start Quiz" action={handleSubmit} />
    </div>
  );
};
