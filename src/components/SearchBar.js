import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  return (
    <Box mb={3}>
      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        onChange={(e) => onSearch(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
    </Box>
  );
};

export default SearchBar;
