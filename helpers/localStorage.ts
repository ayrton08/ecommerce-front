export const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return token;
  }
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    return true;
  }
};

export const isUserLogged = () => {
  const token = getToken();
  if (!token) return false;
  return true;
};
