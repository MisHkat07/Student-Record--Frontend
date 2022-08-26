import {
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers, deleteUser  } from '../service/api';

const StyledTable = styled(Table)`
  width: 80%;
  margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000300;
    color: #eeefff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
    background: #eeefff;
    border-bottom: 1px solid gray;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const response = await getAllUsers();
    setUsers(response.data);
  };
  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllData();
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Reg No</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user, i) => (
          <TRow key={user.id}>
            <TableCell>{ i+1 }</TableCell> <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.location}</TableCell>
            <TableCell>{user.reg}</TableCell>
            <TableCell>
              <Button component={Link} to={`/edit/${user._id}`}>
                Edit
              </Button>{' '}
              <Button
                color="error"
                variant="contained"
                onClick={() => deleteUserDetails(user._id)}
              >
                Delete
              </Button>{' '}
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
