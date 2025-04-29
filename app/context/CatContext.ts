import { createContext } from 'react';

export const CatContext = createContext({
  selectedCat: null,
  setSelectedCat: (cat: any) => {},
});
