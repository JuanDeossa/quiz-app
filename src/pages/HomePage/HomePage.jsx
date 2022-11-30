import { Button } from "../../components/Button/Button";
import "./style/index.css";

export const HomePage = (props) => {
  return (
    <div>
      <Button text="Professor" route="/professor" />
      <Button text="Student" route="/quizsettings" />
    </div>
  );
};
