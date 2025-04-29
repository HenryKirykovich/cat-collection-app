import React, { useState, ReactNode } from 'react';
import { CatContext } from './CatContext';

type CatProviderProps = {
  children: ReactNode;
};

export const CatProvider = ({ children }: CatProviderProps) => {
  const [selectedCat, setSelectedCat] = useState(null);

  return (
    <CatContext.Provider value={{ selectedCat, setSelectedCat }}>
      {children}
    </CatContext.Provider>
  );
};
