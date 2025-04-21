import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import {router} from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth'; // my firebase config
import { auth } from './firebase'; // my firebase config

// first page that working only 3 sec 

function Index() {
  const[showSplash, setSplash] = useState(true); // show branding splash first



  useEffect(()=> {
    const timer = setTimeout(()=> {
      setSplash(false); //end showing
    }, 3000);
    
    return() => clearTimeout(timer);
  }, [])


  useEffect(() => {
    if (!showSplash) {
      // now do auth check after splash
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          router.replace('/(tabs)');
        } else {
          router.replace('/(auth)/login');
        }
      });

      return unsubscribe;
    }
  }, [showSplash]);


  return (
    <ImageBackground  // working likes background and container, I use it instead Text + styles.container
        source={require('../assets/cat_images/collection.jpg')} style={styles.background}>  
        <View style={styles.overlay}>                                 
          <Text style={styles.text}>Please wait. Loading App...</Text>      
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {     // property like simple flex-box
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff'
  },
  text: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
    
  }, 
  overlay: {  
    backgroundColor: 'rgba(0, 0, 0, 0.3)', //  Improve text readability, more proff. 
    padding: 20,
    borderRadius: 10,
  
    
  }
});

export default Index