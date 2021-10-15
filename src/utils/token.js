export const setToken = (token) => {
  window.sessionStorage.setItem('token', JSON.stringify(token));
}

export const getToken = () => {
  const tokenString = window.sessionStorage.getItem('token');
  if(!!tokenString && tokenString.length) {
    const token = JSON.parse(tokenString);
    return token;
  } else {
    return null;
  }
}

export const clearToken = () => {
  window.sessionStorage.clear();
}