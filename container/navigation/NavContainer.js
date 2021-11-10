import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
const Stack = createStackNavigator();
const NavContainer = () => {
    return(
<>
<NavigationContainer>
<Stack.Navigator
screenOptions = {{
    header : () => null
}}
// if we use here it applies for entire navigation
>
    <Stack.Screen
    name = "page_1"
    component = {Page1}
    options = {{
        header : () => null
    }}
    // header navigation is none
    />
    <Stack.Screen
    name = "page_2"
    component = {Page2}
    options = {{
        header : () =>{
            return(
                <View>
                    <Text>currently you are on page2</Text>
                </View>
            )
        }
    }}
    />
    <Stack.Screen
    name = "page_3"
  component = {Page3}
/>
<Stack.Screen name = "page_4" component = {Page4}
/>
</Stack.Navigator>
</NavigationContainer>
</>
    )
}

export default NavContainer