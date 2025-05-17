import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #004aad;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Meu Site</h1>
    </HeaderContainer>
  );
};

export default Header;