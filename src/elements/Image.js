// LIBRARY
import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
  width: 100%;
  display: block;
  margin: ${(props) => props.margin};
`;

const Image = ({ src, alt, ...props }) => {
  if (src) return <ImageStyle {...props} src={src} alt={alt} />;
  else return null;
};

export default Image;
