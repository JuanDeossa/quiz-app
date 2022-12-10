import "./style/index.css";
import { StudentsTable } from "../../components/StudentsTable/StudentsTable";
import { DetailModal } from "../../components/Modals/DetailModal";
import { Button } from "../../components/Button/Button";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Navigate } from "react-router-dom";

export const ProfessorPage = () => {
  const { logged, setLogged } = useContext(ModalContext);
  console.log(logged);
  const LogOut = () => {
    setLogged(false);
  };
  if (!logged) {
    return <Navigate to="/" />;
  }
  return (
    <div className="professor-page">
      <div className="students-table__container">
        <div className="MuiButton-container">
          <Button
            backButton={true}
            route="/"
            text="&#11013;"
            styles={{ fontSize: "50px" }}
            action={LogOut}
          />
        </div>
        <h3 className="students-table__title">Students info</h3>
        <StudentsTable />
      </div>
      <DetailModal />
    </div>
  );
};
