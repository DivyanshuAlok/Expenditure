import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Dashboard from './src/View/Dashboard';
import MyText from './src/Components/MyText';

const data = {
  email: 'divyanshu@gmail.com',
};

const App = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 20,
          marginHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <MyText style={{fontSize: 18}}>Spending Dashboard</MyText>
        <TouchableOpacity>
          <MyText style={{fontSize: 18}}>Logout</MyText>
        </TouchableOpacity>
      </View>
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
