export const getToken = (): string | null | undefined => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return token;
  }
};

export const removeToken = (): boolean | undefined => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    return true;
  }
};

export const isUserLogged = (): boolean => {
  const token = getToken();
  if (!token) return false;
  return true;
};
