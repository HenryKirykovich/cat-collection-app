// components/CatCard.tsx

// This component is used to display a cat card with an image, title, description, and action buttons.
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { CatContext } from './context/CatContext';

const CatCard = ({ cat, onPress, showActions = false }) => {
  const { favorites, toggleFavorite, removeCat, setSelectedCat } = useContext(CatContext);
  const isFavorite = favorites.includes(cat.id);
  const router = useRouter();

  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          {/* Circle image preview */}
          {cat.image && (
            <Image
              source={{ uri: cat.image }}
              style={styles.thumbnail}
              resizeMode="cover"
            />
          )}

          {/* Title and description */}
          <View style={styles.textBlock}>
            <Text style={styles.title}>{cat.title}</Text>
            {cat.description ? (
              <Text style={styles.description}>{cat.description}</Text>
            ) : null}
          </View>

          {/* Favorite icon */}
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

      {/* Action buttons: Delete & Edit */}
      {showActions && (
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => removeCat(cat.id)}
          >
            <Ionicons name="trash-outline" size={20} color="gray" />
            <Text style={styles.iconText}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              setSelectedCat(cat);
              router.push('/(tabs)/new-item');
            }}
          >
            <Ionicons name="create-outline" size={20} color="gray" />
            <Text style={styles.iconText}>Edit</Text>
          </TouchableOpacity>
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
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 24,
    marginTop: 8,
    marginLeft: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#555',
  },
});

export default CatCard;
