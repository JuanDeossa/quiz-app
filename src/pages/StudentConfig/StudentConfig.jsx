import { TemplateComp } from "../../components/TemplateComp/TemplateComp";
import "./style/index.css";

export const StudentConfig = (props) => {
  return (
    <div>
      <TemplateComp text="Student config" />
      <form action="">
      <div className="option-container">
        <label htmlFor="">Category</label>
        <select name="category">
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
      </div>
      <div className="option-container">
        <label htmlFor="">Difficulty</label>
        <select name="dificulty">
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
      </div>
      <div className="option-container">
        <label htmlFor="">Type</label>
        <select name="category">
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
      </div>
      </form>
    </div>
  );
};
