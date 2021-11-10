import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { View , Text} from "react-native";
const CustomButton = (props) => {
    return(
        <View>
            <Pressable 
            style ={({pressed}) => [
                {backgroundColor : pressed?'#ddd':`${props.colour}`},
                styles.btn,
                // {...props.style}
            ]}
            android_ripple = {{color : '#00f'}}
            onPress = {props.onPressedFunction}>
                <Text>{`${props.title}`}</Text>
            </Pressable> 
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        padding:10,
        alignItems : 'center'
    }
})
export default CustomButton