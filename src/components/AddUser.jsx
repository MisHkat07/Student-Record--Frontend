import {
  Button, FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendData } from '../service/api';

const Container = styled(FormGroup)`
  width: 40%;
  margin: 5% auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialState = {
  name: '',
  email: '',
  phone: '',
  location: '',
  reg:''
};

const AddUser = () => {
  const [user, setUser] = useState(initialState);
  const Navigate = useNavigate();
  const getUser = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const addUser = async () => {
    await sendData(user);
     Navigate('/all');
  };

  return (
    <Container>
      <Typography variant="h3">Add User</Typography>
      <FormControl>
        <InputLabel> Name </InputLabel>
        <Input onChange={(e) => getUser(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel> Email </InputLabel>
        <Input onChange={(e) => getUser(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel> Phone </InputLabel>
        <Input onChange={(e) => getUser(e)} name="phone" />
      </FormControl>
      <FormControl>
        <InputLabel> Location </InputLabel>
        <Input onChange={(e) => getUser(e)} name="location" />
      </FormControl>
      <FormControl>
        <InputLabel> Reg No </InputLabel>
        <Input onChange={(e) => getUser(e)} name="reg" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={()=> addUser()}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
