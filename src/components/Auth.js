import React from 'react';
import { useSelector } from 'react-redux';

const Auth = ({ children, userId }) => {
  const id = useSelector((state) => state.user.userId);

  if (id === userId) return <>{children}</>;

  return null;
};

export default Auth;
