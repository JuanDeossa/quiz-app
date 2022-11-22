import { Button } from "../../components/Button/Button";
import "./style/index.css";

export const HomePage = (props) => {
  return (
    <div>
      <Button text="Professor" route="/P" />
      <Button text="Student" route="/S" />
    </div>
  );
};
