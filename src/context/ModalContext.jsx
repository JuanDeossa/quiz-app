import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [logged, setLogged] = useState(false);
  const [data, setData] = useState({});

  return (
    <ModalContext.Provider
      value={{
        data,
        setData,
        openModal,
        setOpenModal,
        openModal2,
        setOpenModal2,
        openModal3,
        setOpenModal3,
        logged,
        setLogged,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
