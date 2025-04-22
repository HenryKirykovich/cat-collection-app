// HomeScreen.js or HomeScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Pressable style={styles.menuIcon} onPress={() => alert('Burger menu doesn’t work')}>
          <Ionicons name="menu" size={28} color="#333" />
        </Pressable>

        <Text style={styles.title}>Home</Text>
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Welcome to my Cat's Collection</Text>

        <Image
          source={require('../../assets/images/top_pic.jpg')}
          style={styles.image}
        />

        <Text style={styles.subtitle}>What do you know about cat's breed?</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's start</Text>
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  topBar: {
    height: 60,
    backgroundColor: '#9ebed9',
    justifyContent: 'center',     // center the title vertically
    alignItems: 'center',         // center the title horizontally
    position: 'relative',         // needed for absolute icon
  },

  menuIcon: {
    position: 'absolute',
    left: 16,
    top: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },

  content: {
    padding: 20,
    alignItems: 'center',
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },

  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 100,
    overflow: 'hidden',
    marginTop: 20,
  },

  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 20,
    textAlign: 'center',
  },

  button: {
    width: 200,
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
