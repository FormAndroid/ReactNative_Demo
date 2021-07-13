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
 
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
 import Ionicons from 'react-native-vector-icons/Ionicons';
 // Modification du Grade necessaire -> Voir la doc ;)
 
 import Home from './src/containers/home/home';
 import About from './src/containers/about/about';
 import Weather from './src/containers/weather/weather';
 
 const Tab = createBottomTabNavigator();
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const baseStyle = {
     backgroundColor: isDarkMode ? '#000' : '#FFF',
     flex:1
   };
   
   return (
     <SafeAreaView style={baseStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <NavigationContainer>
         <Tab.Navigator>
 
           <Tab.Screen name="home" component={Home} options={{
             tabBarIcon: ({color, size}) => (
               <Ionicons name="home-outline" size={size} color={color} />
             ),
             tabBarLabel: "Accueil"
           }} />
 
           <Tab.Screen name="weather" component={Weather} options={{
             tabBarIcon: ({color, size}) => (
               <Ionicons name="rainy-outline" size={size} color={color} />
             ),
             tabBarLabel: "Météo"
           }} />
 
           <Tab.Screen name="about" component={About} options={{
             tabBarIcon: ({color, size}) => (
               <Ionicons name="beer-outline" size={size} color={color} />
             ),
             tabBarLabel: "À propos"
           }} />
 
         </Tab.Navigator>
       </NavigationContainer>
     </SafeAreaView>
   );
 };
 
 export default App;
 