import React from "react";
import { Pressable, View ,Text} from "react-native";

const MapsBtn = ({navigation}) => {
    const onPressHandler = () => {
        navigation.navigate('maps')
    }
    return(
        <View>
            <Pressable onPress={onPressHandler}><Text>vds</Text></Pressable>
        </View>
    )
}
export default MapsBtn