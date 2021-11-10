import React from 'react';
import { Pressable, Text, View } from 'react-native';


const ScreenAM = ({navigation}) => {
    const navToScreenB = () => {
        navigation.navigate('screenB')
    }
    return(
        <View>
            <Text>
                Screen A
            </Text>
            <Pressable
            onPress = {navToScreenB}
            >
                <Text>click here to go to screenb</Text>
            </Pressable>
        </View>
    )
}

export default ScreenAM