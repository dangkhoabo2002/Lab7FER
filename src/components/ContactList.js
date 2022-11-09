// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";

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

// export default function ContactList() {
//   return (
//     <div style={{ padding: "10vh" }}>
//       <h1>Contact List</h1>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Name</StyledTableCell>
//               <StyledTableCell align="left">Email</StyledTableCell>
//               <StyledTableCell align="left">Phone</StyledTableCell>
//               <StyledTableCell align="left">Message</StyledTableCell>
//               <StyledTableCell align="left">Action</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <StyledTableRow key={row.name}>
//                 <StyledTableCell
//                   component="th"
//                   scope="row"
//                   style={{ width: "150px" }}
//                 >
//                   {row.name}
//                 </StyledTableCell>
//                 <StyledTableCell align="left" style={{ width: "200px" }}>
//                   {row.calories}
//                 </StyledTableCell>
//                 <StyledTableCell align="left" style={{ width: "170px" }}>
//                   {row.fat}
//                 </StyledTableCell>
//                 <StyledTableCell align="left" style={{ width: "550px", heigh:"auto" }}>
//                   {row.carbs}
//                 </StyledTableCell>
//                 <StyledTableCell align="left" style={{ width: "auto" }}>
//                   <Button variant="outlined" startIcon={<DeleteIcon />}>
//                     Delete
//                   </Button>
//                 </StyledTableCell>
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
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";
// require('dotenv').config()
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

const ENDPOINT = "https://6358d002c27556d289443e6e.mockapi.io/contact"
export default function ContactList() {
  const [contactList, setContactList] = useState([]);

  const getList = async() => {
    const data = await (await fetch(ENDPOINT)).json()
    
    setContactList(data)
  }

  // const removeContact =(index)=>{
  //   setContactList(pre=>{
  //     pre.splice(index,1)
  //     return [...pre];
  //   })
  // }
  const removeContact =async(id)=>{
    
    await fetch(ENDPOINT+`/${id}`, {method: 'DELETE'}).then(result=>setContactList(contactList.filter(item=>item.id!=id)))
  }
  
  React.useEffect(()=>{

    getList()
  },[])


  return (
    <div style={{ padding: "10vh" }}>
      <h1>Contact List</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Phone</StyledTableCell>
              <StyledTableCell align="left">Message</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contactList.map((row,index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{ width: "150px" }}
                >
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left" style={{ width: "200px" }}>
                  {row.email}
                </StyledTableCell>
                <StyledTableCell align="left" style={{ width: "170px" }}>
                  {row.phone}
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  style={{ width: "550px", heigh: "auto" }}
                >
                  {row.message}
                </StyledTableCell>
                <StyledTableCell align="left" style={{ width: "auto" }}>
                  <Button
                    onClick={() => {
                      removeContact(row.id)
                    }}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
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
