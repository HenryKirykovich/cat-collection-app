//CatProvider.tsx
import React, { useState, useEffect, ReactNode } from 'react';
import { CatContext, Cat } from './CatContext';
import { useLoadingCats } from '../../app/lib/loadingCats';
import { supabase } from '../../app/lib/supabase';

type CatProviderProps = { children: ReactNode };

export const CatProvider = ({ children }: CatProviderProps) => {
  const { cats: initialCats, favorites: initialFavorites, loading } = useLoadingCats();

  const [catsState, setCatsState] = useState<Cat[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);

  // Sync local state when initial data is loaded
  useEffect(() => {
    if (!loading) {
      setCatsState(initialCats);
      setFavorites(initialFavorites);
    }
  }, [initialCats, initialFavorites, loading]);

  // ✅ Add new cat to Supabase and local state
  const addCat = async (catData: Omit<Cat, 'id'>): Promise<Cat | null> => {
    try {
      const { data, error } = await supabase
        .from('cats')
        .insert(catData)
        .select()
        .single(); // 👈 returns the newly created row

      if (error) throw error;

      setCatsState((prev) => [...prev, data]);
      return data;
    } catch (error) {
      console.error('❌ Insert failed:', error);
      return null;
    }
  };

  // ✅ Update existing cat in Supabase and state
  const updateCat = async (updatedCat: Cat) => {
    try {
      const { error } = await supabase
        .from('cats')
        .update(updatedCat)
        .eq('id', updatedCat.id);

      if (error) throw error;

      setCatsState((prev) =>
        prev.map((cat) => (cat.id === updatedCat.id ? updatedCat : cat))
      );

      console.log('✅ Updated in Supabase:', updatedCat);
    } catch (error) {
      console.error('❌ Update failed:', error);
    }
  };

  // ✅ Delete cat from Supabase and state
  const removeCat = async (id: string) => {
    try {
      const { error } = await supabase
        .from('cats')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setCatsState((prev) => prev.filter((cat) => cat.id !== id));
      setFavorites((prev) => prev.filter((favId) => favId !== id));
      setSelectedCat(null);

      console.log('🗑️ Deleted from Supabase:', id);
    } catch (error) {
      console.error('❌ Failed to delete from Supabase:', error);
    }
  };

  // ✅ Toggle favorite status and update Supabase
  const toggleFavorite = async (id: string) => {
    const isNowFavorite = !favorites.includes(id);
    setFavorites((prev) =>
      isNowFavorite ? [...prev, id] : prev.filter((favId) => favId !== id)
    );

    const { error } = await supabase
      .from('cats')
      .update({ favorite: isNowFavorite })
      .eq('id', id);

    if (error) console.error('❌ Failed to update favorite:', error);
  };

  return (
    <CatContext.Provider
      value={{
        cats: catsState,
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
























































































