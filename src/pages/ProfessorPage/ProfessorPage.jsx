import { StudentsTable } from "../../components/StudentsTable/StudentsTable";
import "./style/index.css";

const students =[
  { name: "Juan", score: 100, aproved: true },
  { name: "Richard", score: 100, aproved: true },
  { name: "Elon", score: 20, aproved: false },
  { name: "Juan", score: 100, aproved: true },
  { name: "Richard", score: 100, aproved: true },
  { name: "Elon", score: 20, aproved: false },
  { name: "Juan", score: 100, aproved: true },
  { name: "Richard", score: 100, aproved: true },
  { name: "Elon", score: 20, aproved: false },
  { name: "Juan", score: 100, aproved: true },
  { name: "Richard", score: 100, aproved: true },
  { name: "Elon", score: 20, aproved: false },
];

export const ProfessorPage = (props) => {
  return (
    <div className="professor-page">
      <h3>ProfessorPage</h3>
      <StudentsTable dataBase={students}/>
    </div>
  );
};
