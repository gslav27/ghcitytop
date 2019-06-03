import styled, { keyframes } from 'styled-components/macro';



const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export default styled.div`
  display: block;
  width: 3em;
  height: 3em;
  border: 5px solid ${({ theme }) => theme.palette.colors.lightGrey};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.palette.colors.darkBlue};
  animation: ${spin} 1s ease-in-out infinite;
`;
