import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [data, setData] = useState({});

  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        openModal2,
        setOpenModal2,
        data,
        setData
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
