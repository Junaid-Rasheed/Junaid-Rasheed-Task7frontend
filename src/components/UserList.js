import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function UserList({
  users,
  prevPage,
  nextPage,
  handleSort,
  sortField,
  sortOrder,
}) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>
                Age{" "}
                <div style={{ display: "inline-block" }}>
                  {sortField === "age" && sortOrder === "asc" ? (
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleSort("age", "desc")}
                    >
                      <ArrowDropDownIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleSort("age", "asc")}
                    >
                      <ArrowDropUpIcon />
                    </IconButton>
                  )}
                </div>
              </TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date of Birth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.dob.slice(0, 10)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <IconButton onClick={prevPage}>
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
        <IconButton onClick={nextPage}>
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default UserList;
