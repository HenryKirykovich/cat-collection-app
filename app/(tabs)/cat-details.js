// app/(tabs)/cat-details.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { CatContext } from '../../components/context/CatContext';

export default function CatDetails() {
  const { selectedCat } = useContext(CatContext);
  const router = useRouter();

  if (!selectedCat) return <Text>No cat selected</Text>;

  return (
    <ImageBackground
      source={require('../../assets/images/Cat_images/Splash_cat.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        {/* Image preview */}
        {selectedCat.image && (
          <Image
            source={{ uri: selectedCat.image }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 100, // exactly half of width/height
              alignSelf: 'center',
              marginBottom: 20,
              borderWidth: 2,
              borderColor: '#ccc',
              backgroundColor: '#eee',
              resizeMode: 'cover',
            }}
          />
        )}
        {/* Back button */}
        <Button title="← Back to Home" onPress={() => router.back()} />

        <Text style={styles.title}>{selectedCat.title}</Text>
        <Text style={styles.description}>{selectedCat.description}</Text>

        {selectedCat.origin && <Text style={styles.origin}>🌍 Origin: {selectedCat.origin}</Text>}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
  image: {
    borderRadius: 12,
    height: 250,
    marginBottom: 20,
    width: '100%',
  },
  origin: {
    color: '#444',
    fontStyle: 'italic',
    marginTop: 12,
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
