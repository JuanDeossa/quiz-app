import "./style.css";
import { useNavigate } from "react-router-dom";
import { Button as MuiButton } from "@mui/material";

export const Button = (props) => {
  //Props Destructuring Assignment.
  const {
    text,
    route = "",
    action = () => {},
    styles = { textTransform: "none" },
  } = props;

  const navigate = useNavigate();

  return (
    <MuiButton
      className="MuiButton MuiButton_"
      variant="contained"
      sx={{ ...styles }}
      onClick={() => {
        action();
        navigate(route);
      }}
    >
      {text}
    </MuiButton>
  );
};
