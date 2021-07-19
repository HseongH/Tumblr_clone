// LIBRARY
import React from 'react';
import styled from 'styled-components';

// STYLE
import { borderBox } from '../common/style';

const GridStyle = styled.div`
  width: ${(props) => (props.width ? props.width : props.theme.size.postWidth)};
  background: ${(props) =>
    props.color ? `rgba(${props.theme.palette[props.color]}, ${props.opacity})` : 'none'};
  margin: ${(props) => props.margin};
  ${(props) => borderBox(props.radius, props.padding)};

  ${(props) => props.addStyle()};
`;

const Grid = ({ children, ...props }) => {
  return <GridStyle {...props}>{children}</GridStyle>;
};

Grid.defaultProps = {
  opacity: 1,
  addStyle: () => {},
};

export default Grid;
