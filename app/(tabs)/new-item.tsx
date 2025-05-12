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
  const { addCat, updateCat, selectedCat, setSelectedCat } = useContext(CatContext);
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [errors, setErrors] = useState({ title: '', description: '' });

  // Request image/camera permissions
  useEffect(() => {
    (async () => {
      await ImagePicker.requestCameraPermissionsAsync();
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    })();
  }, []);

  // Pre-fill form if editing, otherwise clear it
  useEffect(() => {
    if (selectedCat) {
      setTitle(selectedCat.title || '');
      setDescription(selectedCat.description || '');
      setImage(selectedCat.image || '');
    } else {
      setTitle('');
      setDescription('');
      setImage(null);
    }
  }, [selectedCat]);

  // Validate inputs
  const validateForm = () => {
    const newErrors = { title: '', description: '' };
    let isValid = true;

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

    if (!description.trim()) {
      newErrors.description = 'Description is required and must be at least 1 character.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    if (selectedCat) {
      updateCat({
        ...selectedCat,
        title: title.trim(),
        description: description.trim(),
        image: image ?? undefined,
      });
    } else {
      addCat({
        title: title.trim(),
        description: description.trim(),
        image: image ?? undefined,
      });
    }

    Alert.alert('Success', selectedCat ? 'Cat updated!' : 'New cat saved!');
    setSelectedCat(null); // Clear after submit
    router.replace('/');
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
        <Button
          title={selectedCat ? 'Update Cat' : 'Add Cat'}
          onPress={handleSubmit}
        />
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





















































































































































































































