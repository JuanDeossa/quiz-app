import { useEffect, useRef, useState } from "react";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { DropDown } from "../../components/DropDown/DropDown";
import { TemplateComp } from "../../components/TemplateComp/TemplateComp";
import { getCategoriesFromApi,difficulties} from "../../services/getOptions";
import "./style/index.css";
import { getQuizURl } from "../../services/getQuizURL";
import { useNavigate } from "react-router-dom";
import { QuestionsAmountSelector } from "../../components/QuestionsAmountSelector/QuestionsAmountSelector";

export const StudentConfigPage = (props) => {
  const [categories, setCategories] = useState([1, 2, 3]);
  const [amount,setAmount]= useState(1)
  const difficulties_=Object.values(difficulties)
  const form=useRef(null)
  const navigate=useNavigate()

  const handleSubmit=()=>{
    const formData=new FormData(form.current)
    const optionsSelected={
        categoryID:formData.get('Category'),
        difficulty:formData.get('Difficulty'),
        amount:amount,
    }
    const url=getQuizURl(optionsSelected)
    navigate(
      '/question',
      {state:{url:url}}
    )
  }

  const handleAmount=(value)=>{
    setAmount(value)
  }

  useEffect(() => {
    const setData = (async()=>{
      const categories = await getCategoriesFromApi()
      setCategories(categories)
    })()
  },[]);

  return (
    <div>
      <TemplateComp text="Student config" />
      <form action="/" ref={form}>
        <DropDown title="Category" dataArray={categories}/>
        <DropDown title="Difficulty" dataArray={difficulties_}/>
        <QuestionsAmountSelector setAmount={handleAmount}/>
      </form>
      <SubmitButton text="Start Quiz" action={handleSubmit}/>
    </div>
  )
}
