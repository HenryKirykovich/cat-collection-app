// components/context/CatContext.ts
import { createContext } from 'react';
import React from 'react';

export interface Cat {
  // what will be containe the all cards  low level declaring
  id?: string;
  title: string;
  description?: string;
  image?: string;
  origin?: string;
  favorite?: boolean;
}

export interface CatContextType {
  // what must be uncluded inside card  next level declaring class
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
  addCat: async () => null, // Dummy async function for default value
  removeCat: () => {},
  updateCat: () => {},
  selectedCat: null,
  setSelectedCat: () => {},
  favorites: [],
  toggleFavorite: () => {},
});
