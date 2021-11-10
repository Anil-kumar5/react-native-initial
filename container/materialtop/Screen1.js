import React from "react";
import { Text, View, Pressable } from "react-native";

const Screen1 = ({navigation}) => {
    const onPressHandler = () =>{
        navigation.openDrawer();
      }
    return(
        <View>
            <Text>Screen1</Text>
            <Pressable
            onPress = {onPressHandler}
            style={{backgroundColor:'pink',padding:20,alignItems:'center'}}
            >
       <Text style={{fontSize:20}}>Toggle drawer</Text>
            </Pressable>
        </View>
    )
}

export default Screen1