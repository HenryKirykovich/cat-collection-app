// components/context/CatProvider.tsx
import React, { useState, ReactNode, useEffect } from 'react';
import { CatContext, Cat } from './CatContext';
import initialData from '../../data/source.json';

type CatProviderProps = { children: ReactNode };

export const CatProvider = ({ children }: CatProviderProps) => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);

  useEffect(() => {
    setCats(
      initialData.map((cat) => ({
        ...cat,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      })) as Cat[]
    );
  }, []);
  // This already allows storing the image URI along with the rest of the data.
  const addCat = (catData: Omit<Cat, 'id'>) => {
    const newCat: Cat = {
      id: Date.now().toString(),
      ...catData,
    };
    setCats((prev) => [...prev, newCat]);
  };

  const removeCat = (id: string) => {
    setCats(prev => prev.filter(cat => cat.id !== id));
    setSelectedCat(null); //  reset selection after removal
  };
  

  return (
    <CatContext.Provider value={{ cats, addCat, removeCat, selectedCat, setSelectedCat }}> 
      {children}
    </CatContext.Provider>
  );
};
