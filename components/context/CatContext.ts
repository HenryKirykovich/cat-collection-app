// components/context/CatContext.ts
import { createContext } from 'react';  // Importing createContext from React to create a context for managing cat data. 
// And the CatContext is used to provide and consume cat data throughout the app.

export interface Cat {
  id: string;
  title: string;
  description?: string;
  image?: string;  // this allows saving image URI
}

export interface CatContextType {
  cats: Cat[];
  addCat: (cat: Omit<Cat, 'id'>) => void;
  removeCat: (id: string) => void;
  // removeCat: (id: string) => void; //  Function to remove a cat by its ID.
  selectedCat: Cat | null;
  setSelectedCat: (cat: Cat | null) => void;
}

export interface CatContextType {
  cats: Cat[];
  addCat: (cat: Omit<Cat, 'id'>) => void;
  removeCat: (id: string) => void;
  selectedCat: Cat | null;
  setSelectedCat: (cat: Cat | null) => void;
}


export const CatContext = createContext<CatContextType>({
  cats: [],
  addCat: () => {},
  removeCat: () => {},
  selectedCat: null,
  setSelectedCat: () => {},
});
//  Creating a context for managing cat data, with default values for the context properties.



