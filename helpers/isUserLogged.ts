export const isUserLogged = () => {
  const res = localStorage.getItem("token");
  if (!res) return false;
  return true;
};
