import "./style/index.css";
import { useContext, useEffect, useRef, useState } from "react";
import { DropDown } from "../../components/DropDown/DropDown";
import { getCategoriesFromApi, difficulties } from "../../services/getOptions";
import { getQuizURl } from "../../services/getQuizURL";
import { useLocation, useNavigate } from "react-router-dom";
import { QuestionsAmountSelector } from "../../components/QuestionsAmountSelector/QuestionsAmountSelector";
import { DataContext } from "../../context/DataContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Button } from "../../components/Button/Button";
import { ModalContext } from "../../context/ModalContext";
import { ValidationModal } from "../../components/Modals/ValidationModal";
import { modalMessages } from "../../components/Modals/modalMessages";

export const StudentConfigPage = () => {
  const { setOpenModal2 } = useContext(ModalContext);
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState(1);
  const [message, setMessage] = useState("");
  const [, setStudentName] = useLocalStorage("studentName", null);
  const [studentsDB] = useLocalStorage("studentsDB", []);
  const { loading, setLoading } = useContext(DataContext);
  const difficulties_ = Object.values(difficulties);

  const form = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { setQuestionsStarted } = useContext(DataContext);

  const handleSubmit = (e) => {
    const formData = new FormData(form.current);
    const name = formData.get("name");
    const userExists = studentsDB.some((student) => student.name === name);
    if (!name) {
      e.preventDefault();
      setMessage(modalMessages.emptyName);
      setOpenModal2((prevState) => !prevState);
      return;
    } else if (userExists) {
      e.preventDefault();
      setMessage(modalMessages.userExists);
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
      <ValidationModal text={message} />
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
            // required
          />
          <button onClick={handleSubmit}>Start Quiz</button>
          <Button
            backButton={true}
            route="/"
            text="&#11013;"
            styles={{ fontSize: "50px" }}
          />
        </>
      </form>
    </div>
  );
};
