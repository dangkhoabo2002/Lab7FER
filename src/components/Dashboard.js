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
              <StyledTableCell>Name of Movie</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Rating</StyledTableCell>
              <StyledTableCell>Cost</StyledTableCell>
              <StyledTableCell>Info</StyledTableCell>
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
                    style={{ width: "150px" }}

                    //   onChange={(e) => setNewName(e.target.value)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    required
                    id="standard-required"
                    defaultValue={contact.email}
                    variant="standard"
                    style={{ width: "200px" }}

                    //   onChange={(e) => setNewEmail(e.target.value)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    required
                    id="standard-required"
                    defaultValue={contact.phone}
                    variant="standard"
                    style={{ width: "auto" }}

                    //   onChange={(e) => setNewPhone(e.target.value)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    required
                    id="standard-required"
                    defaultValue={contact.program}
                    style={{ width: "150px" }}
                    variant="standard"
                    //   onChange={(e) => setNewProgram(e.target.value)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    style={{ width: "530px" }}
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
