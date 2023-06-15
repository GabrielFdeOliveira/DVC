import React, { useState } from 'react';
import { Box, Typography, Button, TextField, List, ListItem, ListItemText } from '@mui/material';

export const FormSection: React.FC = () => {
  const [input, setInput] = useState('');
  const [nameList, setNameList] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Regular expression to check for letters and spaces only
    const validInput = /^[a-zA-Z\s]*$/.test(input);

    const validLength = input.length <= 30;

    if (validInput && validLength) {
      setNameList((prevListItems) => [...prevListItems, input]);
      setInput('');
    } else {
      // Display error or show validation message
      if (!validInput) {
        console.log('Input should contain only letters and spaces.');
      }
      if (!validLength) {
        console.log('Input length should be less than or equal to 30 characters.');
      }
    }
  };
  
  return (
    <Box py={4}>
      <Typography variant="h5" mb={3}>
        <form onSubmit={handleSubmit}>
          <TextField
          label="Enter your name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
          <Button type='submit'>Submit</Button>
        </form>
        <List>
          {nameList.map((item) => (
            <ListItem key={item}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Typography>
    </Box>
  );
};
