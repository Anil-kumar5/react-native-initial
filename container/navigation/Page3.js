import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Page3 = ({navigation}) => {
    const onNavToPage4 = () =>{
navigation.navigate('page_4')
    }
    return(
        <View>
            <Text>
                page3
            </Text>
            <TouchableOpacity style ={{backgroundColor:'red'}} 
            activeOpacity={.5}
            onPress = {onNavToPage4}
            >
                 <Text>go to page4</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Page3