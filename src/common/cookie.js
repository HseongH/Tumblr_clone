export const getCookie = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split('; Authorization=');

  if (parts.length >= 2) return parts.pop().split(';').shift();
};

export const setCookie = (token) => {
  document.cookie = `Authorization=${token};`;
};

export const delCookie = () => {
  document.cookie = `Authorization=; expires=${new Date('1999-01-01').toUTCString()};`;
};
