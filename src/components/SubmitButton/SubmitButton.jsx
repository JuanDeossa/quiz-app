import "./style/index.css";

export const SubmitButton = (props) => {
  const { text, action } = props;
  return (
    <button className="standar-button" onClick={() => action()}>
      {text || "DefaultText"}
    </button>
  );
};
