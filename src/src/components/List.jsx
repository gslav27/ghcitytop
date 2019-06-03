import React from 'react';
import styled from 'styled-components/macro';



const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px 0;
  max-width: 700px;
`;



function List({ children }) {
  return (
    <StyledList>
      { children }
    </StyledList>
  );
}

export default List;
