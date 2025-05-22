import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="breedcat" options={{ title: 'Breed Cat' }} />
    </Drawer>
  );
}
