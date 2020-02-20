export const TOKEN_KEY = "@airbnb-Token";
export const isAuthenticated = () => !!localStorage.getItem(TOKEN_KEY);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const loginUser = data => {
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem('name',data.name)
  console.log(localStorage)
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};