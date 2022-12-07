import "./style/index.css";
import { useContext, useEffect, useRef, useState } from "react";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { DropDown } from "../../components/DropDown/DropDown";
import { getCategoriesFromApi, difficulties } from "../../services/getOptions";
import { getQuizURl } from "../../services/getQuizURL";
import { useLocation, useNavigate } from "react-router-dom";
import { QuestionsAmountSelector } from "../../components/QuestionsAmountSelector/QuestionsAmountSelector";
import { DataContext } from "../../context/DataContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Button } from "../../components/Button/Button";
import { ModalContext, ModalProvider } from "../../context/ModalContext";
import { ValidationModal } from "../../components/ValidationModal/ValidationModal";

export const StudentConfigPage = () => {
  const { setOpenModal2 } = useContext(ModalContext);
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState(1);
  const [studentName, setStudentName] = useLocalStorage("studentName", null);
  const [studentsDB, setStudentsDB] = useLocalStorage("studentsDB", []);
  const { loading, setLoading } = useContext(DataContext);
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
      return;
    } else if (userExists) {
      setOpenModal2((prevState) => !prevState);
      return;
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
  const setData = async () => {
    setLoading(true);
    const categories = await getCategoriesFromApi();
    setCategories(categories);
    setLoading(false);
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <div className="StudentConfigPage">
      <ValidationModal />
      <h2>Student Config</h2>
      <form action="" ref={form}>
        <DropDown title="Category" dataArray={categories} loading={loading} />
        <DropDown
          title="Difficulty"
          dataArray={difficulties_}
          loading={loading}
        />
        <QuestionsAmountSelector setAmount={handleAmount} loading={loading} />
        <>
          <input
            type="text"
            name="name"
            placeholder="Who are you ?"
            disabled={loading}
            required
          />
          <SubmitButton
            text="Start Quiz"
            action={handleSubmit}
            disabled={loading}
          />
          <Button
            route="/"
            text="&#11013;"
            styles={{ fontSize: "50px", maxHeight: "40px" }}
          />
        </>
      </form>
    </div>
  );
};
