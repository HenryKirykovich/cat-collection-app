// components/CatCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Cat } from './context/CatContext';

// Props: a cat object and an optional onPress function
type Props = {
  cat: Cat;
  onPress?: () => void;
};

const CatCard = ({ cat, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        {/* Circular image preview if available */}
        {cat.image && (
          <Image
            source={{ uri: cat.image }}
            style={styles.thumbnail}
            resizeMode="cover"
          />
        )}

        {/* Text content for title and optional description */}
        <View style={styles.textBlock}>
          <Text style={styles.title}>{cat.title}</Text>
          {cat.description ? (
            <Text style={styles.description}>{cat.description}</Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 10,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 40, // perfect circle
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#eee',
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    color: '#555',
  },
});

export default CatCard;
