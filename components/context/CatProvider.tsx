import React, { useState, ReactNode, useEffect } from 'react';
import { CatContext, Cat } from './CatContext';
import initialData from '../../data/source.json';

type CatProviderProps = { children: ReactNode };

export const CatProvider = ({ children }: CatProviderProps) => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]); // ✅ NEW

  useEffect(() => {
    setCats(
      initialData.map((cat) => ({
        ...cat,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      })) as Cat[]
    );
  }, []);

  const addCat = (catData: Omit<Cat, 'id'>) => {
    const newCat: Cat = {
      id: Date.now().toString(),
      ...catData,
    };
    setCats((prev) => [...prev, newCat]);
  };

  const removeCat = (id: string) => {
    setCats(prev => prev.filter(cat => cat.id !== id));
    setSelectedCat(null);
    setFavorites(prev => prev.filter(favId => favId !== id)); // Optional: auto-remove from favorites
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  return (
    <CatContext.Provider
      value={{
        cats,
        addCat,
        removeCat,
        selectedCat,
        setSelectedCat,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </CatContext.Provider>
  );
};
