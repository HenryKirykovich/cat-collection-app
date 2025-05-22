import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Button, View, Text } from 'react-native';
import React from 'react';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Button title="Open Menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
      <Text>Welcome to Drawer Home!</Text>
    </View>
  );
}
