import { Button } from "../../components/Button/Button";
import "./style/index.css";

export const HomePage = (props) => {
  return (
    <div className="hompage">
      <div className="hompage-container">
        <h2>Welcome</h2>
        <img
          src="https://as2.ftcdn.net/v2/jpg/03/32/68/71/1000_F_332687153_gmsohq86koOEWFYlYSI3N6xzb1zIcG88.jpg"
          alt=""
        />
        <div className="user-container">
          <Button text="Professor" route="/professor" />
          <Button text="Student" route="/quizsettings" />
        </div>
      </div>
    </div>
  );
};
