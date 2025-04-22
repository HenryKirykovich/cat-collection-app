import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categoryData: Record<string, { description: string; image: any }> = {
  "Look breed": {
    description: "Find and explore various cat breeds from around the world!",
    image: require('../../assets/images/cat_breed.jpg'), 
  },
  "Funny cat collection": {
    description: "Enjoy a funny collection of cats doing hilarious things!",
    image: require('../../assets/images/cat_breed.jpg'), 
  },
  "Back to home": {
    description: "Return to the home page and start over.",
    image: require('../../assets/images/cat_breed.jpg'),
  },
};

export default function CategoryDetails() { 
    // 1️⃣ Get the route parameter "category" from the URL (e.g. ?category=Look%20breed)
    const { category } = useLocalSearchParams();

    // 2️⃣ Decode the string to turn "Look%20breed" into "Look breed"
    const decoded = decodeURIComponent(category as string);

    // 3️⃣ Get the matching data from the categoryData object,
    // telling TypeScript: "Yes, this decoded string is a valid key of categoryData"
    const details = categoryData[decoded as keyof typeof categoryData];




  if (!details) {
    return (
      <View style={styles.container}>
        <Text>Category not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
      <Pressable style={styles.menuIcon} onPress={() => alert('Burger menu doesn’t work')}>
        <Ionicons name="menu" size={28} color="#333" />
     </Pressable>

      <Text style={styles.title}>Look breed</Text> {/* <-- update dynamically if needed */}
    </View>

      <View style={styles.contentBox}>
      <Text style={styles.description}>{details.description}</Text>
        <Image source={details.image} style={styles.image} />
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentBox: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain', // for fully fit
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  topBar: {
    height: 60,
    backgroundColor: '#9ebed9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
  
});
