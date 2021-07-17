import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import globalStyle from '../../../global-style';

const Search = (props) => {

    const [city, setCity] = useState('');
    const nav = useNavigation();

    const onSearch = () => {
        // Navigation avec envoie de donnée
        nav.navigate('weather/result', { city, message: `La météo de ${city}` });
    }

    return (
        <View style={globalStyle.screen}>
            <Text>Veuillez entrer le nom d'une ville</Text>
            <TextInput value={city} onChangeText={(text) => setCity(text)}
                style={globalStyle.input} />
            <Button
                title='Rechercher'
                color='#FE0160'
                onPress={onSearch}
            />
        </View>
    )
}


export default Search;