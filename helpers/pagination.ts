export const getNumberOfPages = (total: number, limit: number) => {
  const numberOfPages = [] as any;

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    numberOfPages.push(i);
  }

  return numberOfPages;
};
