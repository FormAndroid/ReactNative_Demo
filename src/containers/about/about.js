import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import globalStyle from '../../global-style';

const About = (props) => {

    const nav = useNavigation();

    const onPressBtn = () => {
        // Les console.log sont consultable dans le terminal où vous avez 'npx react-native start'
        console.log('On a cliqué sur le bouton de la page About');

        // Exemple de navigation
        nav.navigate('home');
    };

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>About</Text>
            <Text style={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore rem inventore fuga omnis, animi consequatur ab consectetur harum nisi sed enim at totam sequi deleniti provident quasi vel porro! Quo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint provident ratione dicta omnis incidunt ea voluptatum illo, non a magni pariatur nostrum, assumenda repellat fugiat? Consectetur impedit quo aperiam pariatur.</Text>
            <Button 
                title="Retour à l'accueil"
                color="#FF5500"
                onPress={onPressBtn}
                accessibilityLabel="Permet de retourner à la page d'accueil" />
            {/* Pour combiné 2 styles, on peut les ajouters via un tableau*/}
            <Text style={[style.text, style.spaceTop]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit illum vitae, veniam tempora nulla eum dolor eveniet distinctio ab nam est ipsum ea hic aut, laborum doloribus, fugit illo!</Text>
            <Text style={style.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim numquam reiciendis, esse magnam, ex velit architecto eligendi voluptatibus itaque repellendus debitis? Nostrum itaque in laborum nulla tempore! Voluptas, asperiores adipisci.</Text>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        marginBottom: 10
    },
    spaceTop: {
        marginTop: 20
    }
})

export default About;