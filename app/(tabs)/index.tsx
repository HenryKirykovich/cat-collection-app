import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity, // ✅ добавлен импорт
} from 'react-native';
import { useRouter } from 'expo-router';
import { CatContext } from '../../components/context/CatContext';
import CatCard from '../../components/CatCard';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const { cats, selectedCat, setSelectedCat } = useContext(CatContext);
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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={60}
      >
        <SafeAreaView style={styles.overlay}>
          <Text style={styles.header}>Cat&#39;s breed</Text>

          <TextInput
            style={styles.input}
            placeholder="Search cat's breed..."
            value={search}
            onChangeText={setSearch}
          />

          <TouchableOpacity style={styles.searchButton} onPress={() => console.log('Search:', search)}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>

          <FlatList
            data={filteredItems}
            keyExtractor={(item, index) => item.id ?? index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 20 }}>
                <CatCard
                  cat={item}
                  onPress={() => {
                    setSelectedCat(item);
                    router.push('/(tabs)/cat-details');
                  }}
                  showActions={true}
                />
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 140, flexGrow: 1 }}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#999',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
