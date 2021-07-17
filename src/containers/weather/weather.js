import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './screens/search';
import Result from './screens/result';

const Stack = createStackNavigator();

const Weather = (props) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="weather/search" component={Search} options={{
                title: "Rechercher la météo"
            }} />
            <Stack.Screen name="weather/result" component={Result} options={({route}) => ({
                title: route.params.message
            })} />
        </Stack.Navigator>
    )
}


export default Weather;