// // app/(auth)/login.tsx
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
// import { router } from 'expo-router';

// export default function LoginScreen() {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleAuth = async () => {
//     try {
//       if (isSignUp) {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         console.log("Signed up:", userCredential.user.uid);
//       } else {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         console.log("Signed in:", userCredential.user.uid);
//       }

//       router.replace('/(tabs)');
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Auth Failed", (error as Error).message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>

//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={styles.input}
//         autoCapitalize="none"
//         keyboardType="email-address"
//       />

//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//         secureTextEntry
//       />

//       <TouchableOpacity onPress={handleAuth} style={styles.button}>
//         <Text style={styles.buttonText}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
//       </TouchableOpacity>

//       <Text style={styles.switchText}>
//         {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
//         <Text style={styles.switchLink} onPress={() => setIsSignUp(!isSignUp)}>
//           {isSignUp ? 'Sign In' : 'Sign Up'}
//         </Text>
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eee',
//     justifyContent: 'center',
//     padding: 24,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 32,
//     textAlign: 'center',
//   },
//   input: {
//     backgroundColor: '#fff',
//     padding: 14,
//     borderRadius: 8,
//     marginBottom: 12,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#333',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginVertical: 12,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   switchText: {
//     textAlign: 'center',
//     fontSize: 14,
//   },
//   switchLink: {
//     color: '#007bff',
//     fontWeight: '600',
//   },
// });

