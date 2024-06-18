export const createArrayRange = (pages: number) => {
  return Array.from({ length: pages }, (_, i) => i + 1);
};
