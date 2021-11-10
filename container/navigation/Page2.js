import React from 'react';
import { View , Text, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Page2 = ({navigation}) =>{
    const onNavToPg3 = () =>{
navigation.navigate('page_3')
    }
    const onNavBackToPg1 = () =>{
        navigation.navigate('page_1')
        // navigation.goBack();
        //  if the page doesnt contain arrow icon goback doesnt work
    }
    return(
        <View>
            <Text>
                page2
            </Text>
            <Button
            title = "go to page3"
            onPress = {onNavToPg3}
            >
            </Button>
            <TouchableWithoutFeedback
            onPress = {onNavBackToPg1}
            >
                <Text>go back to page1</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Page2