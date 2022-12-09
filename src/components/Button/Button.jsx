import "./style.css";
import { useNavigate } from "react-router-dom";
import { Button as MuiButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const Button = (props) => {
  //Props Destructuring Assignment.
  const {
    text = "Button",
    route = "",
    action = () => {},
    styles = {},
    backButton = false,
    submitButton = false,
    disabled = false,
  } = props;

  const navigate = useNavigate();

  return (
    <MuiButton
      type={submitButton ? "submit" : "button"}
      disabled={disabled}
      className="MuiButton MuiButton_"
      variant="contained"
      sx={{ ...styles, textTransform: "none" }}
      onClick={() => {
        action();
        navigate(route);
      }}
    >
      {backButton ? <KeyboardBackspaceIcon /> : text}
    </MuiButton>
  );
};
