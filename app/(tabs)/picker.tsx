import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // picker form that dropdown prepered result . BUT I have trouble on ndroid Emul and Ios 

export default function picker() {
  const [value, setValue] = useState('java');

  return (
    <SafeAreaView style={styles.container}>
      <Text>Select a language:</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={value}
          onValueChange={(item) => setValue(item)}
          mode="dialog"           // try “dialog” or “dropdown”
          itemStyle={{ height: 200 }} // on iOS you can increase height
        >
          <Picker.Item label="Java"    value="java" />
          <Picker.Item label="JavaScript" value="js"   />
          <Picker.Item label="Python"  value="py"   />
        </Picker>
      </View>
      <Text>Picked: {value}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 8,
  },
});
