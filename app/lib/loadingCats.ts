import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import { Cat } from '../../components/context/CatContext';

export function useLoadingCats() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCats = async () => {
      const { data, error } = await supabase.from('cats').select('*');

      if (error) {
        console.error('Error loading cats:', error);
      } else {
        setCats(data as Cat[]);
        setFavorites(data.filter(c => c.favorite).map(c => c.id));
      }

      setLoading(false);
    };

    fetchCats();
  }, []);

  return { cats, favorites, loading };
}
