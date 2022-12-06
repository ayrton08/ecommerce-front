export const sortByDate = (orders: [] | null | undefined) => {
  const result = orders?.sort((a: any, b: any) => {
    if (a.createdAt._seconds > b.createdAt._seconds) return -1;
    if (b.createdAt._seconds > a.createdAt._seconds) return 1;
    return 0;
  });

  return result;
};
