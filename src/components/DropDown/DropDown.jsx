import "./style/index.css";

export const DropDown = (props) => {
  const {title,dataArray} = props;
  return (
    <div className="option-container">
      <label htmlFor={title}>{title}</label>
      <select id={title} name={title}>
        {dataArray.map((option,id) => (
          <option key={id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
