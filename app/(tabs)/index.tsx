import { Image, View, Text, StyleSheet, Button } from 'react-native'; //  #Pressable is a built-in React Native component used to detect touches (press events).
import { Ionicons } from '@expo/vector-icons'; // #my hamburger menu icons
import { ScrollView } from 'react-native'; // #my scroll bar
import { Linking} from 'react-native'; // open any url
import { Pressable} from 'react-native'; // create button 
import { TouchableOpacity } from 'react-native'; // for touching button with effect


export default function HomeScreen() {
  return (
    // # my scroling wrap all inside
    <ScrollView contentContainerStyle={styles.container}>
    
      <View style={styles.topBar}>
        <Pressable onPress={() => alert('Sorry, my burger temporarily doesn\'t work')}>
          <Ionicons name="menu" size={28} color="#333" />
        </Pressable>
      </View>

     
      <View style={styles.contentBlock1}>
        <Text style={styles.title}>#Welcome to my first React Native+Expo App#</Text>
        <Text style={styles.subtitle}>#DEV272 class#</Text>
        <Image source={require('../../assets/images/app-developers.png')} style={styles.image}/>
        {/* just link without any ajustment */}
        <Text>  </Text>
        <Button title="About me" onPress={() => Linking.openURL('https://henadzikirykovich.dev/')} /> 
          
      </View>

      
      <View style={styles.contentBlock2}>
        <Text style={styles.title}>#Second copy#</Text>
        <Image source={require('../../assets/images/memory-game.webp')} resizeMode="contain"  style={styles.image}/>
        
        <Pressable style={styles.button} onPress={()=> Linking.openURL('https://henrykirykovich.github.io/Memory_Game_on_React/')}>
          <Text style={{ fontSize: 14, color: '#2A3439' }}>Touch for playing the game</Text>
        </Pressable>

      </View>


      <View style={styles.contentBlock2}>
      <Text style={styles.title}>#Third copy#</Text>
      <Image source={require('../../assets/images/forecast.webp')} style={styles.image}  resizeMode="contain" />
      
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://templix.tech/')}> 
        <Text style={{fontSize: 14, color: 'black'}}>Want you know forecast?</Text>
      </TouchableOpacity>

      
      </View>


    </ScrollView>
  );
}

                                                                                  
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
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
  topBar: {
   
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  contentBlock1: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  contentBlock2 : {
    
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: '#444',
    marginTop: 20,
  },
});































































