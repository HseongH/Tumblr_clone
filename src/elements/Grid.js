// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { borderBox } from '../common/style';

const GridStyle = styled.div`
  width: ${(props) => (props.width ? props.width : props.theme.size.postWidth)};
  height: ${(props) => props.height};
  background: ${(props) =>
    props.color ? `rgba(${props.theme.palette[props.color]}, ${props.opacity})` : 'none'};
  margin: ${(props) => props.margin};
  ${(props) => borderBox(props.radius, props.padding)};

  ${(props) => props.addstyle()};
`;

const Grid = ({ children, ...props }) => {
  return <GridStyle {...props}>{children}</GridStyle>;
};

Grid.defaultProps = {
  opacity: 1,
  addstyle: () => {},
};

export default Grid;
