import "./style.css";
import { useNavigate } from "react-router-dom";
import { Button as MuiButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const Button = (props) => {
  //Props Destructuring Assignment.
  const {
    text = "",
    route = "",
    action = () => {},
    styles = {},
    backButton = false,
  } = props;

  const navigate = useNavigate();

  return (
    <MuiButton
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
