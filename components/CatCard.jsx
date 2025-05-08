// components/CatCard.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { CatContext } from './context/CatContext';
import { Ionicons } from '@expo/vector-icons';

const CatCard = ({ cat, onPress, showActions = false }) => {
  const { favorites, toggleFavorite } = useContext(CatContext);
  const isFavorite = favorites.includes(cat.id);

  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          {/* Circle image */}
          {cat.image && (
            <Image
              source={{ uri: cat.image }}
              style={styles.thumbnail}
              resizeMode="cover"
            />
          )}

          {/* Text */}
          <View style={styles.textBlock}>
            <Text style={styles.title}>{cat.title}</Text>
            {cat.description ? (
              <Text style={styles.description}>{cat.description}</Text>
            ) : null}
          </View>

          {/* Heart icon */}
          <TouchableOpacity onPress={() => toggleFavorite(cat.id)}>
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={24}
              color={isFavorite ? 'red' : 'gray'}
              style={styles.heartIcon}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Show buttons only if enabled and item is favorited */}
      {showActions && isFavorite && (
        <View style={styles.actions}>
          <Button title="Delete" color="red" onPress={() => console.log('Delete clicked')} />
          <View style={{ height: 6 }} />
          <Button title="Push to Favorite" onPress={() => console.log('Already favorited')} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 20,
  },
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
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
  heartIcon: {
    marginLeft: 10,
  },
  actions: {
    marginTop: 8,
    paddingHorizontal: 10,
  },
});

export default CatCard;
