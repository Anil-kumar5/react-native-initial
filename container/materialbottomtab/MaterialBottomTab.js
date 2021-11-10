import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenAM from './ScreenA';
import ScreenBM from './ScreenB';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const MaterialBottomTab = () => {
    return(
        <>
        <NavigationContainer>
        <Tab.Navigator
        screenOptions = {({ route }) => ({
             tabBarIcon : ({focused,size,color}) => {
                let iconName;
                if(route.name === 'screenA'){
                    iconName = 'autoprefixer';
                    size = focused?30:20;
                    color = focused?'pink':'blue'
                }else if (route.name === 'screenB'){
                    iconName = 'btc';
                    color = focused?'pink':'blue';
                    size = focused?30:20
                }
                // else if (route.name === 'screenC'){
                //     iconName = 'btc';
                // }
                return(
                    <FontAwesome5
                     name = {iconName}
                     size = {size}
                     color = {color}
                     />
                )
            }
        })}
        tabBarOptions = {{
            activeTintColor : 'red',
            inactiveTintColor :'violet', 
            activeBackgroundColor : '#fff',
            inactiveBackgroundColor : '#999',
            showLabel : true,
            // showlabel means the navigation name
            labelStyle : {fontSize:16}
        }}
        activeColor = '#f0edf6'
        inactiveColor = '#3e2465'
        barStyle = {{backgroundColor:'#694fad'}}
        >
            <View>
            <Tab.Screen name = "screenA" component = {ScreenAM}/>
            </View>
            <Tab.Screen name = "screenB" component = {ScreenBM} options={{tabBarBadge:6}}/>
            {/* <Tab.Screen name = "screenC" component = {ScreenC}/> */}
        </Tab.Navigator>
        </NavigationContainer>
        </>
    )
}

export default MaterialBottomTab