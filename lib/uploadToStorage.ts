import { supabase } from './supabase';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import { decode } from 'base64-arraybuffer';

export async function uploadImageAsync(uri: string, fileName: string): Promise<string | null> {
  try {
    // 1. Сжимаем изображение
    const manipulated = await ImageManipulator.manipulateAsync(
      uri,
      [{ resize: { width: 800 } }],
      { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
    );

    // 2. Читаем base64 из файла
    const base64 = await FileSystem.readAsStringAsync(manipulated.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // 3. Преобразуем в ArrayBuffer
    const fileBuffer = decode(base64);

    // 4. Загружаем в Supabase
    const { error } = await supabase.storage
      .from('cat-images')
      .upload(fileName, fileBuffer, {
        contentType: 'image/jpeg',
        upsert: true,
      });

    if (error) throw error;

    // 5. Получаем публичную ссылку
    const { data } = supabase.storage.from('cat-images').getPublicUrl(fileName);
    return data?.publicUrl || null;

  } catch (err) {
    console.error('uploadImageAsync error:', err);
    return null;
  }
}
