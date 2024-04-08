import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArkBar from './src/Components/ArkBar';
import {Container} from '@shopify/react-native-skia/lib/typescript/src/renderer/Container';
import Dashboard from './src/View/Dashboard';

const App = () => {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F0F5',
    padding: 10,
  },
});
