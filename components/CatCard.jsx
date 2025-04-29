import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { CatContext } from '@/app/context/CatContext';

export default function CatCard({ cat }) {
    // It receives cat as a prop (a single item from your FlatList) cat contains fields like title, description, and maybe origin
  const router = useRouter(); 
  // Initializes the router object so we can navigate between screens programmatically with router.push(...).
  const {setSelectedCat} = useContext(CatContext); // Access context


  return (
    
    <Pressable
      style={styles.card}
      onPress={() => {
        setSelectedCat(cat); // Save cat to context
        router.push('/cat-details'); // convert data to  JSON object JSON.stringify(object) for cat-details
      }}
      >
      <Text style={styles.title}>{cat.title}</Text>
      <Text numberOfLines={2} style={styles.preview}>
        {cat.description}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E8F0FF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
    color: '#555',
  },
});
