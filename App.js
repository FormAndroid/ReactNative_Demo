/**
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const baseStyle = {
    backgroundColor: isDarkMode ? '#000' : '#FFF',
    flex:1
  };
  
  return (
    <SafeAreaView style={baseStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

export default App;
