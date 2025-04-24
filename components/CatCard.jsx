import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function CatCard({ cat }) {
    // It receives cat as a prop (a single item from your FlatList) cat contains fields like title, description, and maybe origin
  const router = useRouter(); 
  // Initializes the router object so we can navigate between screens programmatically with router.push(...).



  return (
    
    <Pressable
      style={styles.card}
      onPress={() => router.push({ pathname: '/cat-details', params: { cat: JSON.stringify(cat) } })}
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
