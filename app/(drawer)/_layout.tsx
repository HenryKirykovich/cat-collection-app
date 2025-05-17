import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="breedcat" options={{ title: 'Breed Cat' }} />
    </Drawer>
  );
}
