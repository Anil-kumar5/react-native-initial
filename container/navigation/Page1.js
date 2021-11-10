import React from 'react';
import { Pressable, Text, View } from 'react-native';

const Page1 = ({ navigation }) => {
    const navigationToSecondPage = () =>{
        // navigation.navigate('page_2');
        //if we gave like above we get a back arrow icon and after clicking to that
        // arrow we can go to previous pages
        //we can move to initial homepage by clicking the back arrow
        // navigation.goBack();
        //rather than using navigate we can also use the goBack()
       navigation.replace('page_2')
       // if we use replace the arrow icon disappears and if we want to go back 
       // we have to go back by using the buttons only 
    }
    return(
        <View>
            <Text>
                pageone is
            </Text>
            <Pressable
            onPress = {navigationToSecondPage}
            style = {{backgroundColor:'pink'}}
            >
                <Text>Link to page 2</Text>
            </Pressable>
        </View>
    )
}

export default Page1