import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import theme from '../utilities/themes/themes';
import IconError from './ui/Icons/Error';



const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(255, 255, 255, 0.5);
`;

const MessageBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 500px;
  max-width: calc(100vw - 48px);
  min-height: 200px;
  padding: 24px;
  background: #fff;
  text-align: center;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0;
  color: ${({ theme }) => theme.palette.colors.darkBlue};
`;

const ReponseMessage = styled.i`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.colors.grey};
  text-transform: lowercase;
`;



function ErrorMessage({ text }) {
  return (
    <Root>
      <MessageBox>
        <IconError width='72px' height='72px' nativeColor={theme.palette.colors.yellow} />
        <Text>Error fetching data</Text>
        <ReponseMessage>* {text} </ReponseMessage>
      </MessageBox>
    </Root>
  );
}

ErrorMessage.propTypes = { text: PropTypes.string.isRequired };

export default ErrorMessage;
