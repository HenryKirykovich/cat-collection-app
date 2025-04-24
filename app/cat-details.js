import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CatDetails() {
  const { cat } = useLocalSearchParams();
  const catData = JSON.parse(cat);

  return (
    <ImageBackground
      source={require('../assets/images/Cat_images/Splash_cat.jpg')} // ✅ NO SPACES
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.title}>{catData.title}</Text>
        <Text style={styles.description}>{catData.description}</Text>
        {catData.origin && (
          <Text style={styles.origin}>🌍 Origin: {catData.origin}</Text>
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
    flexGrow: 1, // ✅ Important for ScrollView content
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 20,
    justifyContent: 'center',
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
