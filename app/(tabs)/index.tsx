import { Image, View, Text, StyleSheet, Button } from 'react-native'; //  #Pressable is a built-in React Native component used to detect touches (press events).
import { Ionicons } from '@expo/vector-icons'; // #my hamburger menu icons
import { ScrollView } from 'react-native'; // #my scroll bar
import { Linking} from 'react-native'; // open any url
import { Pressable} from 'react-native'; // create button 
import { TouchableOpacity } from 'react-native'; // for touching button with effect
import {TextInput } from 'react-native';
import {useState} from 'react';

const [data, setData] = useState("");
const option = ['Catalog of Cat\'s', 'Funny Cat\'s Photo', 'back'];
const handlePress = () => {
  alert("You submitted: " + data);
};

export default function HomeScreen() {
  return (
    // # my scrollview wraped all 
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.iconContainer}>
          <Pressable onPress={() => alert('Sorry, my burger temporarily doesn\'t work')}>
          <Ionicons name="menu" size={28} color="#333"/>
          </Pressable>
        </View>
        <Text style={styles.titleContainer}>Home</Text>
      </View>

        <Text style={styles.title}>Welcome to my Cat's Collection</Text>
        <Image source={require('../../assets/images/top_pic.jpg')} style={styles.image}/>
        <Text style={styles.subtitle}>What do you know about cat's breed?</Text>
        <TouchableOpacity style={styles.button}>Let's start</TouchableOpacity>        
      
    </View>
  );
}

                                                                                  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  topBar: {
    flexDirection: "row",
    alignItems:"center",
    height: 60,
    backgroundColor: 'green',
  },

  iconContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  button: {
    width: 200, 
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',  // horizontaly centered
    justifyContent: 'center',  // verticaly centered
    padding: 10,
    marginTop: 20,
  },
  
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: '#444',
    marginTop: 20,
  },
});



































































