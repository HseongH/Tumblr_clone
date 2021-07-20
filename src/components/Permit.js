import React from 'react';
import { useSelector } from 'react-redux';

const Permit = ({ children }) => {
  const isLogIn = useSelector((state) => state.user.is_login);

  if (isLogIn) return <>{children}</>;

  return null;
};

export default Permit;
