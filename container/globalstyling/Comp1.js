import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import StylingContainer from './StylingContainer';
const Comp1 = () => {
    return(
        <View>
            <Text
            style = {[
                StylingContainer.forText
            ]}
            >
                for text
            </Text>
            <Pressable
             style={[
                 StylingContainer.fotButton
             ]}
            >
             <Text
              style = {
              [StylingContainer.forText]
              }
             >for button</Text>
            </Pressable>
        </View>
    )
}

export default Comp1