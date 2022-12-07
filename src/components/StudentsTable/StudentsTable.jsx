import "./style/index.css";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBin6Line, RiEyeLine } from "react-icons/ri";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export const StudentsTable = () => {
  // const { setOpenModal, setData } = useContext(ModalContext);
  const zzz = useContext(ModalContext);
  console.log(zzz);
  const { setOpenModal,setData }=zzz
  const [studentsDB, setStudentsDB] = useLocalStorage("studentsDB", []);

  const deleteRow = (name) => {
    const newStudentsArray = studentsDB.filter(
      (student) => student.name !== name
    );
    setStudentsDB(newStudentsArray);
  };

  const showRowDetails = (name) => {
    setOpenModal((prevState) => !prevState);
    const { difficulty, category, questions } = studentsDB.find(
      (student) => student.name === name
    );
    setData({
      name,
      difficulty,
      category,
      questionsNumber: questions?.length,
    });
  };

  const cellStyles = {
    label: {
      padding: {
        xs: "20px 0px 20px 10px",
        sm: "10px 10px",
      },
      fontSize: {
        xs: "16px",
        sm: "25px",
      },
      fontWeight: "900",
    },
    value: {
      padding: {
        xs: "10px 0px 10px 10px",
        sm: "10px 10px",
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
      },
    },
  };

  const labels = ["Name", "Score", "Aproved", "Delete", "Details"];
  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{
          width: "100% ",
          borderTopRightRadius:"20px",
          borderTopLeftRadius:"20px",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {labels.map((label, i) => (
                <TableCell
                  align={label === "Name" ? "left" : "center"}
                  key={i}
                  sx={cellStyles.label}
                >
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!studentsDB.length
              ? null
              : studentsDB.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell sx={cellStyles.value}>{row?.name}</TableCell>
                    <TableCell align="center" sx={cellStyles.value}>
                      {row?.score}
                    </TableCell>
                    <TableCell
                      className={`table-data state ${
                        row?.aproved ? "yes" : "no"
                      }`}
                      align="center"
                      sx={cellStyles.value}
                    >
                      {row?.aproved ? "Yes" : "No"}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={cellStyles.value}
                      id={row.name}
                      onClick={() => deleteRow(row.name)}
                    >
                      <RiDeleteBin6Line className="delete-icon" />
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={cellStyles.value}
                      id={row.name}
                      onClick={() => showRowDetails(row.name)}
                    >
                      <RiEyeLine className="details-icon" />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
