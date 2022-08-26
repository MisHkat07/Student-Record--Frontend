import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser, getUser } from '../service/api';

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
  reg : ''
};

const AddUser = () => {
  const [user, setUser] = useState(initialState);

  const { name, email, phone, location, reg } = user;

    const loadUserDetails = async () => {
      const response = await getUser(id);
      setUser(response.data);
  };
  
  useEffect(() => {
    loadUserDetails();
  }, []);

  const Navigate = useNavigate();

  const { id } = useParams();

  const editUserDetails = async () => {
   const response = await editUser(id, user);
    Navigate('/all');
  };

  const setValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Typography variant="h3">Edit User</Typography>
      <FormControl>
        <InputLabel> Name </InputLabel>
        <Input onChange={(e) => setValue(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
        <InputLabel> Email </InputLabel>
        <Input onChange={(e) => setValue(e)} name="email" value={email} />
      </FormControl>
      <FormControl>
        <InputLabel> Phone </InputLabel>
        <Input onChange={(e) => setValue(e)} name="phone" value={phone} />
      </FormControl>
      <FormControl>
        <InputLabel> Location </InputLabel>
        <Input onChange={(e) => setValue(e)} name="location" value={location} />
      </FormControl>
      <FormControl>
        <InputLabel> Reg No </InputLabel>
        <Input onChange={(e) => setValue(e)} name="reg" value={reg} />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>
          Save
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
