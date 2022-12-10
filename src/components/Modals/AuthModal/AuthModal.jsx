import "./style.css";
import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalContext } from "../../../context/ModalContext";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "85%" },
  minWidth: 260,
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export const AuthModal = () => {
  const navigate = useNavigate();

  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { openModal3, setOpenModal3, logged, setLogged } =
    useContext(ModalContext);

  const handleClose = () => {
    setOpenModal3(false);
    setIncorrectPassword(false);
  };

  const validatePasswordByMouseClick = (e) => {
    if (values?.password === "abc") {
      setLogged(true);
      navigate("/professor");
      setOpenModal3(false);
      setIncorrectPassword(false);
    } else {
      setIncorrectPassword(true);
    }
  };

  const validatePasswordByKeyboard = (e) => {
    if (values?.password.length === 1) {
      setIncorrectPassword(false);
    }
    if (e.code === "Enter") {
      if (values?.password === "abc") {
        setLogged(true);
        navigate("/professor");
        setOpenModal3(false);
        setIncorrectPassword(false);
      } else {
        setIncorrectPassword(true);
      }
    }
  };

  return (
    <div>
      <Modal
        open={openModal3}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            text={"X"}
            styles={{
              backgroundColor: "#cb0000",
              "&:hover": { backgroundColor: "#f30404" },
              position: "absolute",
              right: "20px",
              fontWeight: "900",
              width: { xs: "30px", sm: "50px" },
              height: { xs: "30px", sm: "30px" },
              padding: { xs: "0px" },
              minWidth: "auto",
            }}
            action={handleClose}
          />
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            color="#161e8a"
            sx={{ marginLeft: { xs: "0px", sm: "100px" } }}
          >
            {`Professor`}
          </Typography>
          <FormControl
            sx={{ m: 1, width: "25ch", marginLeft: { xs: "0px", sm: "100px" } }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              placeholder="try with abc"
              onKeyDown={validatePasswordByKeyboard}
            />
            <button
              onClick={validatePasswordByMouseClick}
              className="password-button"
            >
              Submit
            </button>
            {incorrectPassword && (
              <p className="incorrect-answer">Incorrect Password</p>
            )}
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};
