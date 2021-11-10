import React from 'react';
import { Pressable, Text, View } from 'react-native';

const Page4 = ({navigation}) => {
    const onNavBackToPg2 = () => {
      navigation.navigate('page_2')
    }
    return(
        <View>
            <Text>
                page4
            </Text>
            <Pressable
            onPress = {onNavBackToPg2}
            >
                <Text>
                    go back to page2
                </Text>
            </Pressable>
        </View>
    )
}
export default Page4