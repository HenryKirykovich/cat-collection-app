import React, { useState, useContext  } from 'react';
import { CatContext } from '../../components/context/CatContext';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import CatCard from '../../components/CatCard';  //  To reuse a UI component that displays each cat (one block/card per cat).
//import catData from '../../data/source.json';   // To load a list of cat data (array of objects) from a local JSON file.
import { useRouter } from 'expo-router';





export default function HomeScreen() {
  const [search, setSearch] = useState(''); // state of searching 
  const { cats,selectedCat,setSelectedCat,removeCat } = useContext(CatContext);

  const router = useRouter();
  
   // used filter for typing 
   const filteredItems = cats.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <ImageBackground
      source={require('../../assets/images/Cat_images/Splash_cat.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.header}>Cat's breed</Text>

        <TextInput
          style={styles.input}
          placeholder="Search cat's breed..."
          value={search}
          onChangeText={setSearch}
        />

        <Button title="Search" onPress={() => console.log('Search:', search)} />

        <FlatList
          data={filteredItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20 }}>
              <CatCard cat={item} onPress={() => setSelectedCat(item)} />
          
              {selectedCat?.id === item.id && (
                <Button
                  title="Delete"
                  color="red"
                  onPress={() => removeCat(item.id)}
                />
              )}
            </View>
          )}
          
          
        />
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
    flexGrow: 1, // Ensures content stretches inside ScrollView
    backgroundColor: 'rgba(255,255,255,0.85)', // Semi-transparent white overlay
    padding: 20,
    paddingBottom: 100, // Ensures last item is visible
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
