import React, { useEffect, useState } from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage, sortField, sortOrder]);

  const fetchUsers = async (page) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users?page=${page}&sortField=${sortField}&sortOrder=${sortOrder}`
      );
      const res = await response.json();
      setUsers(res.data);
      setTotalPages(res.totalPages);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  console.log(users[0].dob.slice(0, 10));
  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Task 7 - Backend (Junaid Rasheed)
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <UserList
          users={users}
          prevPage={prevPage}
          nextPage={nextPage}
          handleSort={handleSort}
          sortField={sortField}
          sortOrder={sortOrder}
        />
      )}
    </Container>
  );
}

export default App;
