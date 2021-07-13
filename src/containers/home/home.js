import React from 'react';
import { View, Text } from 'react-native';
import globalStyle from '../../global-style';

const Home = (props) => {

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>Accueil !</Text>
            <Text>Application de demo avec React Native</Text>
        </View>
    );
}




export default Home;