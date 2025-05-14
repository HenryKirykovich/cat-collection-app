import { useQuery } from '@tanstack/react-query';
import { supabase } from './supabase';
import { Cat } from '../../components/context/CatContext';

export function useLoadingCats() {
  const { data, error, isLoading } = useQuery<Cat[] | null>({
    queryKey: ['cats'],
    queryFn: async () => {
      const { data, error } = await supabase.from('cats').select('*');

      if (error) {
        console.error('!!!!!!Error loading!!!!!!', error);
        throw new Error(error.message);
      }

      return data as Cat[];
    },
    staleTime: 5 * 60 * 1000 // cashing data for 5 minutes
  });

  const cats: Cat[] = data ?? [];
  const favorites = cats.filter((c) => c.favorite).map((c) => c.id);

  return {
    cats,
    favorites,
    loading: isLoading
  };
}
