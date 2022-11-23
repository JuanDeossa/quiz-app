import "./style/index.css";

export const SubmitButton = (props) => {
  const { text,action } = props;
  return <button onClick={() => action()}>{text || "DefaultText"}</button>;
};
