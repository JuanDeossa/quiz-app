import "./style/index.css";
import { Button } from "../../components/Button/Button";
import { Stack,} from "@mui/material";

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
          <Stack spacing={2} direction="row">
            <Button text="Professor" route="/professor" />
            <Button text="Student" route="/quizsettings" />
          </Stack>
        </div>
      </div>
    </div>
  );
};
