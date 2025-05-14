import { supabase } from './supabase';

export async function uploadImageAsync(uri: string, filename: string): Promise<string | null> {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();

    const { data, error } = await supabase.storage
      .from('cat-images') // ✅ Ensure this matches your bucket name
      .upload(filename, blob, {
        contentType: blob.type || 'image/jpeg', // ✅ Ensure contentType is set
        upsert: true,
      });

    if (error) {
      console.error('❌ Upload failed:', error.message || error);
      return null;
    }

    const publicUrl = supabase.storage
      .from('cats-images')
      .getPublicUrl(data.path).data.publicUrl;

    console.log('✅ Upload complete. URL:', publicUrl);
    return publicUrl;
  } catch (err) {
    console.error('❌ Upload exception:', err);
    return null;
  }
}
