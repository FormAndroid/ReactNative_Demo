import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './screens/search';
import Result from './screens/result';

const Stack = createStackNavigator();

const Weather = (props) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="search" component={Search} options={{
                title: "Rechercher la météo"
            }} />
            <Stack.Screen name="result" component={Result} options={{
                title: "TODO Demo Vendredi"
            }} />
        </Stack.Navigator>
    )
}


export default Weather;