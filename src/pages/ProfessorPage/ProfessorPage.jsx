import { StudentsTable } from "../../components/StudentsTable/StudentsTable";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./style/index.css";

// const students =[
//   { name: "Juan", score: 100, aproved: true },
//   { name: "Richard", score: 100, aproved: true },
//   { name: "Elon", score: 20, aproved: false },
// ];

export const ProfessorPage = (props) => {
  // const [studentsDB, setStudentsDB] = useLocalStorage("studentsDB", []);
  return (
    <div className="professor-page">
      <h3>ProfessorPage</h3>
      <StudentsTable  />
    </div>
  );
};
