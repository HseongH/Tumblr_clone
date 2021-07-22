// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { flexHoz } from '../common/style';

const ConStyle = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Helvetica Neue', 'Roboto', sans-serif;
  color: ${(props) => `rgb(${props.theme.palette.black})`};
  background: ${(props) => `rgb(${props.theme.palette.navy})`};
  line-height: 1.25;
  min-height: 100vh;
  width: 100%;
  padding: 80px 0;
  box-sizing: border-box;
  overflow: hidden;
`;

const GridStyle = styled.div`
  max-width: 990px;
  padding: 0 8px;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
  ${flexHoz('space-between')};
`;

const Container = ({ children, ...props }) => {
  return (
    <ConStyle {...props}>
      <GridStyle>{children}</GridStyle>
    </ConStyle>
  );
};

export default Container;
