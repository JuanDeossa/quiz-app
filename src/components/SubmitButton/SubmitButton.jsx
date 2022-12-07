import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import "./style/index.css";


export const SubmitButton = (props) => {
  const { text, action,disabled } = props;
  return (
    <button className="standar-button" onClick={() => action()} disabled={disabled}>
      {text || "DefaultText"}
    </button>
  );
};
