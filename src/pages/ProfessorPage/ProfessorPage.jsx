import { StudentsTable } from "../../components/StudentsTable/StudentsTable";
import "./style/index.css";

export const ProfessorPage = () => {
  return (
    <div className="professor-page">
      <div className="students-table">
        <h3>Students info</h3>
        <StudentsTable />
      </div>
    </div>
  );
};
