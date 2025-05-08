// app/(tabs)/new-item.tsx
// Include fields such as text input for a name or description.
// Implement Form Validation:
// Ensure required fields cannot be left empty.
// Validate data formats (e.g., text length, number formats if applicable).
// Display meaningful error messages when validation fails. 
// Title: required, minimum 3 characters.
// Description: optional, but if provided, minimum 1 characters + add picture of the cat.


// app/(tabs)/new-item.tsx
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { CatContext } from '../../components/context/CatContext';

export default function NewItemScreen() {
  const { addCat } = useContext(CatContext); // Access the addCat function from global context
  const router = useRouter(); // Router for navigation

  // Local state for form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [errors, setErrors] = useState({ title: '', description: '' });

  // Ask for camera permissions on mount
  useEffect(() => {
    (async () => {
      await ImagePicker.requestCameraPermissionsAsync();
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    })();
  }, []);

  // Form validation logic
  const validateForm = () => {
    const newErrors = { title: '', description: '' };
    let isValid = true;

    // Validate title
    if (!title.trim()) {
      newErrors.title = 'Title is required.';
      isValid = false;
    } else if (title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters.';
      isValid = false;
    } else if (title[0] !== title[0].toUpperCase()) {
      newErrors.title = 'Title must start with an uppercase letter.';
      isValid = false;
    }

    // Validate description
    if (!description.trim()) {
      newErrors.description = 'Description is required and must be at least 1 character.';
      isValid = false;
    }

    setErrors(newErrors); // Update errors state
    return isValid; // Return true if form is valid, false otherwise
  };

  // Pick image from library
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri); // Save selected image URI
    }
  };

  // Take photo using camera
  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri); // Save captured image URI
    }
  };

  // Form submission handler
  const handleSubmit = () => {
    if (!validateForm()) { // If form validation fails
      Alert.alert('Validation Error', 'Please fix the errors before submitting.');
      return;
    }

    // Add new cat using global context
    addCat({ title: title.trim(), description: description.trim(), image: image ?? undefined });
    Alert.alert('Success', 'New cat saved!');
    router.replace('/'); // Navigate back to Home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cat Name *</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => {
          setTitle(text);
          setErrors((prev) => ({ ...prev, title: '' }));
        }}
        placeholder="Enter cat name"
      />
      {errors.title ? <Text style={styles.error}>{errors.title}</Text> : null}

      <Text style={styles.label}>Description *</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => {
          setDescription(text);
          setErrors((prev) => ({ ...prev, description: '' }));
        }}
        placeholder="Describe the cat"
      />
      {errors.description ? <Text style={styles.error}>{errors.description}</Text> : null}

      <View style={styles.buttonSpacing}>
        <Button title="Take a Photo" onPress={takePhoto} />
      </View>

      <View style={styles.buttonSpacing}>
        <Button title="Pick an Image" onPress={pickImage} />
      </View>

      {image && <Image source={{ uri: image }} style={styles.image} />}

      <View style={styles.buttonSpacing}>
        <Button title="Add Cat" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  label: { fontSize: 16, marginTop: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginTop: 4,
    marginBottom: 10,
  },
  error: { color: 'red', marginBottom: 10, fontSize: 14 },
  image: { width: '100%', height: 200, marginVertical: 10, borderRadius: 8 },
  buttonSpacing: { marginVertical: 6 },
});







































































































