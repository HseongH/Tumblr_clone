// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { borderBox } from '../common/style';

const GridStyle = styled.div`
  width: ${(props) => (props.width ? props.width : props.theme.size.postWidth)};
  background: ${(props) => `rgb(${props.theme.palette[props.color]})`};
  margin: ${(props) => props.margin};
  ${(props) => borderBox(props.radius, props.padding)};

  ${(props) => props.appendStyle()};
`;

const Grid = ({ chileren, ...props }) => {
  return <GridStyle {...props}>{chileren}</GridStyle>;
};

Grid.propTypes = {
  color: 'white',
  appendStyle: () => {},
};

export default Grid;
