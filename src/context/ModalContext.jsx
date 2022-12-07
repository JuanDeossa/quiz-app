import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});

  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal,
        data,
        setData
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
