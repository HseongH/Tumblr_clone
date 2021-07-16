// LIBRARY
import React from 'react';
import styled from 'styled-components';

const ConStyle = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Helvetica Neue', 'Roboto', sans-serif;
  color: ${(props) => props.theme.palette.black};
  background: ${(props) => `rgb(${props.theme.palette.navy})`};
  line-height: 1.25;
  min-height: 100vh;
  width: 100%;

  div: {
    max-width: 990px;
    padding: 0 8px;
    box-sizing: border-box;
    margin: 40px auto 0;
    position: relative;
  }
`;

const Container = ({ children, ...props }) => {
  return (
    <ConStyle {...props}>
      <div>{children}</div>
    </ConStyle>
  );
};

export default Container;
