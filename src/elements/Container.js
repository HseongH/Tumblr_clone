// LIBRARY
import React from 'react';
import styled from 'styled-components';

const ConStyle = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Helvetica Neue', 'Roboto', sans-serif;
  color: ${(props) => `rgb(${props.theme.palette.black})`};
  background: ${(props) => `rgb(${props.theme.palette.navy})`};
  line-height: 1.25;
  min-height: 100vh;
  width: 100%;
  padding-top: 80px;
  overflow: hidden;
`;

const GridStyle = styled.div`
  max-width: 990px;
  padding: 0 8px;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
`;

const Container = ({ children, ...props }) => {
  return (
    <ConStyle {...props}>
      <GridStyle>{children}</GridStyle>
    </ConStyle>
  );
};

export default Container;
