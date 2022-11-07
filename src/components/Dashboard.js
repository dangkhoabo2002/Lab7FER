// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// export default function Dashboard() {
//   return (
//     <div style={{ padding: "10vh" }}>
//         <h1>Contact List</h1>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Name of Movie</StyledTableCell>
//               <StyledTableCell align="right">Rating</StyledTableCell>
//               <StyledTableCell align="right">Phon</StyledTableCell>
//               <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//               <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <StyledTableRow key={row.name}>
//                 <StyledTableCell component="th" scope="row">
//                   {row.name}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">{row.calories}</StyledTableCell>
//                 <StyledTableCell align="right">{row.fat}</StyledTableCell>
//                 <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//                 <StyledTableCell align="right">{row.protein}</StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

import { List } from "../data/ListOfFilm";

import { deleteContact, updateContact } from "../features/ContactsAction";

// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Dashboard() {
  //   const dispatch = useDispatch();
  //   const contactList = useSelector((state) => state.contacts.value);
  //   const [newName, setNewName] = useState("");
  //   const [newEmail, setNewEmail] = useState("");
  //   const [newPhone, setNewPhone] = useState("");
  //   const [newProgram, setNewProgram] = useState("");
  //   const [newMessage, setNewMessage] = useState("");
  return (
    <div style={{ padding: "10vh" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Program</StyledTableCell>
              <StyledTableCell>Message</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {List.map((contact) => (
              <StyledTableRow key={contact.name}>
                <StyledTableCell component="th" scope="row">
                  <TextField
                    required
                    id="standard-required"
                    defaultValue={contact.name}
                    variant="standard"
                    //   onChange={(e) => setNewName(e.target.value)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    required
                    id="standard-required"
                    defaultValue={contact.email}
                    variant="standard"
                    //   onChange={(e) => setNewEmail(e.target.value)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    required
                    id="standard-required"
                    defaultValue={contact.phone}
                    variant="standard"
                    //   onChange={(e) => setNewPhone(e.target.value)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    required
                    id="standard-required"
                    defaultValue={contact.program}
                    variant="standard"
                    //   onChange={(e) => setNewProgram(e.target.value)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    style={{ width: "700px" }}
                    required
                    id="standard-required"
                    defaultValue={contact.message}
                    variant="standard"
                    //   onChange={(e) => setNewMessage(e.target.value)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    style={{ width: "auto" }}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    //   onClick={() => {
                    //     dispatch(deleteContact({ id: contact.id }));
                    //   }}
                  >
                    Delete
                  </Button>

                  <Button
                    style={{ width: "auto" }}
                    variant="contained"
                    endIcon={<SendIcon />}
                    //   onClick={() => {
                    //     dispatch(
                    //       updateContact({
                    //         name: contact.newName,
                    //         email: contact.newEmail,
                    //         phone: contact.newPhone,
                    //         program: contact.newProgram,
                    //         message: contact.newMessage,
                    //       })
                    //     );
                    //   }}
                  >
                    Update
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
