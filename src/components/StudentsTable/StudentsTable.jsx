import "./style/index.css";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const StudentsTable = () => {
  const [studentsDB, setStudentsDB] = useLocalStorage("studentsDB", []);
  const deleteRow = (name) => {
    const newStudentsArray=studentsDB.filter(student=>student.name!==name);
    setStudentsDB(newStudentsArray)
  };
  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table-label" align="left">
                Name
              </TableCell>
              <TableCell className="table-label" align="left">
                Score
              </TableCell>
              <TableCell className="table-label" align="left">
                Aproved
              </TableCell>
              <TableCell className="table-label" align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!studentsDB.length
              ? null
              : studentsDB.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className="table-data" align="left">
                      {row?.name}
                    </TableCell>
                    <TableCell className="table-data" align="center">
                      {row?.score}
                    </TableCell>
                    <TableCell
                      className={`table-data state ${
                        row?.aproved ? "yes" : "no"
                      }`}
                      align="center"
                    >
                      {row?.aproved ? "Yes" : "No"}
                    </TableCell>
                    <TableCell className="table-data" align="center">
                      <div id={row.name} onClick={() => deleteRow(row.name)}>
                        <RiDeleteBin6Line className="delete-icon" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
