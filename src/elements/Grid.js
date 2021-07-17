// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { borderBox } from '../common/style';

const GridStyle = styled.div`
  width: ${(props) => (props.width ? props.width : props.theme.size.postWidth)};
  background: ${(props) => `rgba(${props.theme.palette[props.color]}, ${props.opacity})`};
  margin: ${(props) => props.margin};
  ${(props) => borderBox(props.radius, props.padding)};

  ${(props) => props.appendStyle()};
`;

const Grid = ({ children, ...props }) => {
  return <GridStyle {...props}>{children}</GridStyle>;
};

Grid.propTypes = {
  color: 'white',
  opacity: 1,
  appendStyle: () => {},
};

export default Grid;
