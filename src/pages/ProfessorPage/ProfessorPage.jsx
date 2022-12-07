import "./style/index.css";
import { StudentsTable } from "../../components/StudentsTable/StudentsTable";
import { DetailModal } from "../../components/DetailModal/DetailModal";
import { useState } from "react";
import { ModalProvider } from "../../context/ModalContext";

export const ProfessorPage = () => {
  return (
    <ModalProvider>
      <div className="professor-page">
        <div className="students-table">
          <h3>Students info</h3>
          <StudentsTable />
        </div>
        <DetailModal />
      </div>
    </ModalProvider>
  );
};
