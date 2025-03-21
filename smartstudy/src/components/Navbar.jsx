import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  color: white;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/study-tools" style={{ color: 'white', textDecoration: 'none' }}>Study Tools</Link>
      <Link to="/resources" style={{ color: 'white', textDecoration: 'none' }}>Resources</Link>
    </NavbarContainer>
  );
};

export default Navbar;
