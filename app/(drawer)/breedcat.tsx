import { View, Text, StyleSheet } from 'react-native';

export default function BreedCatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cat Breed Info</Text>
      <Text style={styles.text}>Breed: Maine Coon</Text>
      <Text style={styles.text}>Origin: United States</Text>
      <Text style={styles.text}>Features: Large size, bushy tail, friendly personality</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
