// app/(tabs)/cat-details.tsx
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
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

        {selectedCat.origin && (
          <Text style={styles.origin}>🌍 Origin: {selectedCat.origin}</Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 20,
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
  origin: {
    marginTop: 12,
    fontStyle: 'italic',
    color: '#444',
  },
});
