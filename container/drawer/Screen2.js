import React from "react";
import { Pressable, Text, View } from "react-native";

const Screen2 = ({navigation,route}) => {
    //   const {screenNo , navigationType} = route.params;
    // we can update the props value by using 
    // navigation.setParams({screenNo:'6})
    return(
        <View>
            <Text>Screen2</Text>
            <Pressable
            onPress = {() => navigation.navigate('screen1')}
            >
             <Text>click here to go back to screen1</Text>
            </Pressable>
              <Text>{route.params.screenNo}</Text>
             <Text>{route.params.navigationType}</Text>
             {/* <Text>{screenNo}</Text>
             <Text>type---{navigationType}</Text> */}
        </View>
    )
}

export default Screen2