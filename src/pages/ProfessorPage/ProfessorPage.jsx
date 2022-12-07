import "./style/index.css";
import { StudentsTable } from "../../components/StudentsTable/StudentsTable";
import { DetailModal } from "../../components/DetailModal/DetailModal";
import { Button } from "../../components/Button/Button";

export const ProfessorPage = () => {
  return (
    <div className="professor-page">
      <div className="students-table__container">
        <div className="MuiButton-container">
          <Button
            backButton={true}
            route="/"
            text="&#11013;"
            styles={{ fontSize: "30px", padding:"0px 2px !important"}}
          />
        </div>
        <h3 className="students-table__title">Students info</h3>
        <StudentsTable />
      </div>
      <DetailModal />
    </div>
  );
};
