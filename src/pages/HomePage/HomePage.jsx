import "./style/index.css";
import { Button } from "../../components/Button/Button";
import { Stack } from "@mui/material";
import { AuthModal } from "../../components/Modals/AuthModal/AuthModal";
import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";

export const HomePage = (props) => {
  const buttonStyles = {
    marginTop: "0px !important",
    width: { xs: "100%", sm: "28%" },
    fontSize: "20px",
  };

  const buttonsGroupStyles = {
    flexDirection: { sm: "row" },
    justifyContent: { sm: "center" },
    gap: { xs: "25px", sm: "30px" },
  };

  const { openModal3, setOpenModal3 } = useContext(ModalContext);
  const handleProfessorAuth = () => {
    setOpenModal3(true);
  };

  return (
    <div className="homePage">
      <div className="homepage__container">
        <h2 className="homepage__title">Welcome</h2>
        <img
          src="https://as2.ftcdn.net/v2/jpg/03/32/68/71/1000_F_332687153_gmsohq86koOEWFYlYSI3N6xzb1zIcG88.jpg"
          alt=""
        />
        <Stack
          spacing={2}
          direction="column"
          alignItems="center"
          width="100%"
          sx={buttonsGroupStyles}
        >
          <Button
            text="Professor"
            styles={buttonStyles}
            action={handleProfessorAuth}
          />
          <Button text="Student" route="/quizsettings" styles={buttonStyles} />
        </Stack>
        <AuthModal />
      </div>
    </div>
  );
};
