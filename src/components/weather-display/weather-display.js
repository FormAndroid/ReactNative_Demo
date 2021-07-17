import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

const WeatherDisplay = (props) => {
    const {temp, desc, icon} = props;

    return (
        <View style={style.mainLayout}>
            <View style={style.infoLayout}>
                <Text style={style.temp}>Température : {temp} °c</Text>
                <Text style={style.desc}>Météo : {desc}</Text>
            </View>
            <Image 
            style={style.imgWeather}
            source={{uri: `https://openweathermap.org/img/wn/${icon}@4x.png`}} />
        </View>
    );
}

const style = StyleSheet.create({
    mainLayout : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoLayout: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    temp: {
        fontSize: 28
    },
    desc: {
        fontSize:24
    },
    imgWeather : {
        width: 75, 
        height: 75,
        borderColor: '#000',
        borderWidth: 1, 
        borderRadius: 30,
        backgroundColor: '#b3f1ff'
    }
})

export default WeatherDisplay;