import { useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import globalStyle from '../../../global-style';
import axios from 'axios';
import ErrorDisplay from '../../../components/error-display/error-display';
import WeatherDisplay from '../../../components/weather-display/weather-display';

const URL_BASE = 'https://api.openweathermap.org/data/2.5/weather?q=__city__&appid=3d4aa29181fa1cfefbb4a4d43a7f1568&units=metric&lang=fr';

const Result = (props) => {
    //const {city} = props.route.params;

    const route = useRoute();
    const {city} = route.params;

    const [temp, setTemp] = useState(null);
    const [desc, setDesc] = useState(null);
    const [icon, setIcon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const resetData = () => {
        setTemp(null);
        setDesc(null);
        setIcon(null);
        setLoading(true);
        setError(false);
    }

    useEffect(() => {
        const url = URL_BASE.replace('__city__', city);
        resetData();

        axios.get(url)
            .then(({data}) => {
                setTemp(data.main.temp);
                setDesc(data.weather[0].description);
                setIcon(data.weather[0].icon);
            })
            .catch(error => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [city])

    return (
        <View style={globalStyle.screen}>
            {loading ? (
                <ActivityIndicator color="#FE2090" size='large' />
            ) : error ? (
                <ErrorDisplay />
            ): (
                <WeatherDisplay temp={temp} desc={desc} icon={icon} />
            )}
        </View>
    )
}


export default Result;