import { useEffect, useState } from "react";
import { DropDown } from "../../components/DropDown/DropDown";
import { TemplateComp } from "../../components/TemplateComp/TemplateComp";
import { getCategoriesFromApi,difficulties,types,} from "../../services/getOptions";
import "./style/index.css";

export const StudentConfig = (props) => {
  const [categories, setCategories] = useState([1, 2, 3]);
  const difficulties_=Object.values(difficulties)
  const types_=Object.values(types)

  useEffect(() => {
    const setData = (async () => {
      const categories = await getCategoriesFromApi()
      setCategories(categories)
    })()
  }, []);

  return (
    <div>
      <TemplateComp text="Student config" />
      <form action="">
        <DropDown title="Category" dataArray={categories} />
        <DropDown title="Difficulty" dataArray={difficulties_} />
        <DropDown title="Type" dataArray={types_} />
      </form>
    </div>
  );
};
