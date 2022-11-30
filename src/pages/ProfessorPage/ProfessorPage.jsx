import "./style/index.css";

const students =[
  {name:"Jose",score:100},
  {name:"Juan",score:60},
  {name:"Maria",score:33},
  {name:"Mike",score:82},
]

export const ProfessorPage = (props) => {
  return (
    <div className="professor-page">
      <h3>ProfessorPage</h3>
      <ul className="student-list">
        {students.map((student,index)=>(
          <li className="student-item" key={index}>
            <p>{student.name}</p>
            <p>{student.score}</p>
            <p>{`State:${student.score>=60?"Aproved":"Reproved"}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
