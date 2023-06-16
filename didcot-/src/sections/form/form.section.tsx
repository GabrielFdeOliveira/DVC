import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { Box, Typography, Button, TextField, List, ListItem, ListItemText } from '@mui/material';

export const FormSection: React.FC = () => {
  const [inputs, setInputs] = useState({
    intermediateInput: '',
    begginerInput: '',
    outDoorInput: '',
  });

  const [lists, setLists] = useState({
    intermediateList: [] as string[],
    begginerList: [] as string[],
    outDoorList: [] as string[],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const validInput = /^[a-zA-Z\s]*$/.test(inputs.intermediateInput) && /^[a-zA-Z\s]*$/.test(inputs.begginerInput);
  
    const validLength = inputs.intermediateInput.length <= 30 && inputs.begginerInput.length <= 30;
  
    if (validInput && validLength) {
      if (inputs.intermediateInput.trim() !== '') {
        setLists((prevLists) => ({
          ...prevLists,
          intermediateList: [...prevLists.intermediateList, inputs.intermediateInput],
        }));
      }
      if (inputs.begginerInput.trim() !== '') {
        setLists((prevLists) => ({
          ...prevLists,
          begginerList: [...prevLists.begginerList, inputs.begginerInput],
        }));
      }
      if (inputs.outDoorInput.trim() !== '') {
        setLists((prevLists) => ({
          ...prevLists,
          outDoorList: [...prevLists.outDoorList, inputs.outDoorInput],
        }));
      }
      setInputs({
        intermediateInput: '',
        begginerInput: '',
        outDoorInput: '',
      });
    } else {
      if (!validInput) {
        console.log('Input should contain only letters and spaces.');
      }
      if (!validLength) {
        console.log('Input length should be less than or equal to 30 characters.');
      }
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', border: 'solid' }} p={4}>
        <Box sx={{ display: 'inline-block' }}>
          <Typography variant="h5">
            Intermediate
            <form onSubmit={handleSubmit}>
              <TextField
                name="intermediateInput"
                label="Enter your name"
                value={inputs.intermediateInput}
                onChange={handleInputChange}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Typography>
        </Box>
        <Box sx={{ display: 'inline-block' }}>
          <Typography variant="h5" mb={3}>
            Beginners
            <form onSubmit={handleSubmit}>
              <TextField
                name="begginerInput"
                label="Enter your name"
                value={inputs.begginerInput}
                onChange={handleInputChange}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Typography>
        </Box>
        <Box sx={{ display: 'inline-block' }}>
          <Typography variant="h5" mb={3}>
            Outdoor Session
            <form onSubmit={handleSubmit}>
              <TextField
                name="outDoorInput"
                label="Enter your name"
                value={inputs.outDoorInput}
                onChange={handleInputChange}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <List>
          {lists.intermediateList.map((item) => (
            <ListItem sx={{ display: 'inline' }} key={uuidv4()}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <List>
          {lists.begginerList.map((item) => (
            <ListItem sx={{ display: 'inline' }} key={uuidv4()}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <List>
          {lists.outDoorList.map((item) => (
            <ListItem sx={{ display: 'inline' }} key={uuidv4()}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
