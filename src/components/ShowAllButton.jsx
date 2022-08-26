import { Button, styled } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Parenet = styled('div')`
  text-align: center;
`;
const NavButton = styled(NavLink)`
  font-size: 20px;
  color: inherit;
  text-decoration: none; 
`;

const ShowAllButton = () => {
   return (
      <Parenet>
         <NavButton to="/all">
      <Button
        color="success"
        variant="contained"
      >
        {' '}
        See All Students{' '}
      </Button>
    </NavButton></Parenet>
  
  );
};

export default ShowAllButton;
