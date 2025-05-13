// components/context/CatContext.ts
import { createContext } from 'react';

export interface Cat {
  id?: string;
  title: string;
  description?: string;
  image?: string;
  origin?: string;
  favorite?: boolean;
}

export interface CatContextType {
  cats: Cat[];
  addCat: (cat: Omit<Cat, 'id'>) => Promise<Cat | null>; // ✅ Now returns a Promise
  removeCat: (id: string) => void;
  updateCat: (updated: Cat) => void;
  selectedCat: Cat | null;
  setSelectedCat: (cat: Cat | null) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export const CatContext = createContext<CatContextType>({
  cats: [],
  addCat: async () => null,           // ✅ Dummy async function for default value
  removeCat: () => {},
  updateCat: () => {},
  selectedCat: null,
  setSelectedCat: () => {},
  favorites: [],
  toggleFavorite: () => {},
});









