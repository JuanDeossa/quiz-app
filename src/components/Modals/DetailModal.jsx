import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalContext } from "../../context/ModalContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "50%", sm: "70%" },
  minWidth: 260,
  maxWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export const DetailModal = () => {
  const { openModal, setOpenModal, data } = useContext(ModalContext);
  const { name, difficulty, category, questionsNumber } = data;
  const handleClose = () => setOpenModal(false);
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            color="#161e8a"
          >
            {`${name}`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {<b>Difficulty: </b>}
            {difficulty}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {<b>Category: </b>}
            {category}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {<b>Questions: </b>}
            {questionsNumber}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
