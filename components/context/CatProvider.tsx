import React, { useState, ReactNode } from 'react';
import { CatContext, Cat } from './CatContext';
import { useLoadingCats } from '../../app/lib/loadingCats';
import { supabase } from '../../app/lib/supabase'; // Import your Supabase client

type CatProviderProps = { children: ReactNode };

export const CatProvider = ({ children }: CatProviderProps) => {
  const { cats, loading } = useLoadingCats();
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const addCat = (catData: Omit<Cat, 'id'>) => {
    console.log('AddCat should also insert into Supabase');
  };

  const updateCat = (updatedCat: Cat) => {
    console.log('UpdateCat should update Supabase');
  };

  const removeCat = (id: string) => {
    console.log('RemoveCat should delete from Supabase');
    setSelectedCat(null);
    setFavorites((prev) => prev.filter((favId) => favId !== id));
  };

  const toggleFavorite = async (id: string) => {
    const cat = cats.find((c) => c.id === id);
    if (!cat) return;

    const newFavorite = !favorites.includes(id);

    // Update local state
    setFavorites((prev) =>
      newFavorite ? [...prev, id] : prev.filter((favId) => favId !== id)
    );

    // Sync with Supabase
    const { error } = await supabase
      .from('cats')
      .update({ favorite: newFavorite })
      .eq('id', id);

    if (error) console.error('Supabase error updating favorite:', error);
  };

  return (
    <CatContext.Provider
      value={{
        cats,
        addCat,
        updateCat,
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
