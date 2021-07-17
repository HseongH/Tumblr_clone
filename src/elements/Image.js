import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
  display: block;
  cursor: pointer;
  width: 54px;
  height: 54px;
`;

const Image = (props) => {
  const { src, alt } = props;

  if (src) return <ImageStyle src={src} alt={alt} />;
  else return null;
};

export default Image;
