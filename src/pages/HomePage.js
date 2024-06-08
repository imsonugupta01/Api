import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../services/api';
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';
import { Container, Typography, Box } from '@mui/material';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers();
        setUsers(users);
        setFilteredUsers(users);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          User List
        </Typography>
        <SearchBar onSearch={setSearchTerm} />
        <UserList users={filteredUsers} />
      </Box>
    </Container>
  );
};

export default HomePage;
