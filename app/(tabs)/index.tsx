// tabs/index

import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { CatContext } from '../../components/context/CatContext';
import CatCard from '../../components/CatCard';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const { cats, selectedCat, setSelectedCat, removeCat } = useContext(CatContext);
  const router = useRouter();

  const filteredItems = cats.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ImageBackground
      source={require('../../assets/images/Cat_images/Splash_cat.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>Cat&#39;s breed</Text>

        <TextInput
          style={styles.input}
          placeholder="Search cat's breed..."
          value={search}
          onChangeText={setSearch}
        />

        <Button title="Search" onPress={() => console.log('Search:', search)} />

        <FlatList
          data={filteredItems}
          keyExtractor={(item, index) => item.id ?? index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20 }}>
              <CatCard
                cat={item}
                onPress={() => {
                  setSelectedCat(item); //Setting my context
                  router.push('/(tabs)/cat-details'); //setting my Navigate
                }}
                showActions={true} //works Only if you want delete/fav buttons here
              />
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#999',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    flex: 1,
    gap: 10,
    padding: 10,
  },
});
