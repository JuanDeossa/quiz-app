import { useEffect, useRef, useState } from "react";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { DropDown } from "../../components/DropDown/DropDown";
import { TemplateComp } from "../../components/TemplateComp/TemplateComp";
import { getCategoriesFromApi,difficulties,types,} from "../../services/getOptions";
import "./style/index.css";
import { getQuizURl } from "../../services/getQuizURL";

export const StudentConfig = (props) => {
  const [categories, setCategories] = useState([1, 2, 3]);
  const difficulties_=Object.values(difficulties)
  const types_=Object.values(types)
  const form=useRef(null)

  const handleSubmit=()=>{
    const formData=new FormData(form.current)
    const optionsSelected={
        categoryID:formData.get('Category'),
        difficulty:formData.get('Difficulty'),
        type:formData.get('Type'),
    }
    const url=getQuizURl(optionsSelected)
    console.log(url)
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
        <DropDown title="Type" dataArray={types_}/>
      </form>
      <SubmitButton text="Start Quiz" action={handleSubmit}/>
    </div>
  )
}
