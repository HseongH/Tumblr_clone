// LIBRARY
import React, { forwardRef } from 'react';
import styled from 'styled-components';

// STYLE
import { borderBox } from '../common/style';

const GridStyle = styled.div`
  width: ${(props) => (props.width ? props.width : props.theme.size.postWidth)};
  height: ${(props) => props.height};
  background: ${(props) =>
    props.bgColor && `rgba(${props.theme.palette[props.bgColor]}, ${props.opacity})`};
  color: ${(props) => props.color && `rgba(${props.theme.palette[props.color]}, ${props.opacity})`};
  margin: ${(props) => props.margin};
  overflow: ${(props) => props.overflow};
  ${(props) => borderBox(props.radius, props.padding)};

  ${(props) => props.addstyle()};
`;

const Grid = forwardRef(({ children, ...props }, ref) => {
  return (
    <GridStyle ref={ref} {...props}>
      {children}
    </GridStyle>
  );
});

Grid.defaultProps = {
  opacity: 1,
  addstyle: () => {},
};

export default Grid;
