//쿠키 가져오기
const getCookie = (name) => {
    return localStorage.getItem(name);
  };

//쿠키 저장
  const setCookie = (name, value) => {
    localStorage.setItem(name, value);
  };

//쿠키 삭제
const deleteCookie = (name) => {
  localStorage.removeItem(name);
};

export { getCookie, setCookie, deleteCookie };
