// app/lib/uploadCats.ts
import React from 'react';
import { supabase } from './supabase';
import { Cat } from '../components/context/CatContext';

// Insert new cat
export async function insertCat(cat: Omit<Cat, 'id'>) {
  const { data, error } = await supabase.from('cats').insert(cat).select().single();

  if (error) {
    console.error('❌ Insert error:', error);
    throw error;
  }

  return data; // Newly inserted cat with id
}

// Update existing cat
export async function updateCatInDB(cat: Cat) {
  const { error } = await supabase.from('cats').update(cat).eq('id', cat.id);

  if (error) {
    console.error('❌ Update error:', error);
    throw error;
  }
}

// Delete cat
export async function deleteCat(id: string) {
  const { error } = await supabase.from('cats').delete().eq('id', id);

  if (error) {
    console.error('❌ Delete error:', error);
    throw error;
  }
}
