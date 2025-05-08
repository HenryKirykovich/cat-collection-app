// components/context/CatContext.ts
import { createContext } from 'react';

export interface Cat {
  id: string;
  title: string;
  description?: string;
  image?: string;
}

export interface CatContextType {
  cats: Cat[];
  addCat: (cat: Omit<Cat, 'id'>) => void;
  removeCat: (id: string) => void;
  selectedCat: Cat | null;
  setSelectedCat: (cat: Cat | null) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export const CatContext = createContext<CatContextType>({
  cats: [],
  addCat: () => {},
  removeCat: () => {},
  selectedCat: null,
  setSelectedCat: () => {},
  favorites: [],
  toggleFavorite: () => {},
});
