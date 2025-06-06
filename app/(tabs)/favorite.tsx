import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { CatContext } from '../../components/context/CatContext';
import CatCard from '../../components/CatCard';

export default function FavoritesScreen() {
  const { cats, favorites, setSelectedCat } = useContext(CatContext);

  // Filter cats to show only favorites
  const favoriteCats = cats.filter((cat) => favorites.includes(cat.id));

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
          <Text style={styles.header}>Favorite Cats</Text>

          {favoriteCats.length === 0 ? (
            <Text style={styles.empty}>
              No favorites yet. ❤️ Tap hearts on the home page!
            </Text>
          ) : (
            <FlatList
              data={favoriteCats}
              keyExtractor={(item) => item.id?.toString() ?? ''}
              renderItem={({ item }) => (
                <View style={{ marginBottom: 20 }}>
                  <CatCard
                    cat={item}
                    onPress={() => setSelectedCat(item)}
                    showActions={false}
                  />
                </View>
              )}
              contentContainerStyle={{ paddingBottom: 140, flexGrow: 1 }} // ✅ как в Home
            />
          )}
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
  empty: {
    color: '#444',
    fontSize: 16,
    marginTop: 40,
    textAlign: 'center',
  },
});
