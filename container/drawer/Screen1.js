import React from "react";
import { Pressable, Text, View } from "react-native";

const Screen1 = ({navigation}) => {
    const navToScreenB = () => {
        navigation.navigate('screen2',{screenNo:'1',navigationType:'drawer'})
    }
    return(
        <View>
            <Text>Screen1</Text>
            <Pressable onPress = {navToScreenB}>
                <Text>click here </Text>
            </Pressable>
        </View>
    )
}

export default Screen1