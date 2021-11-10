import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
 const Tab = createMaterialTopTabNavigator();
const MaterialTop = () => {
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
                   labelStyle : {fontSize:16},
                   showIcon:true,
               }}
               activeColor = '#f0edf6'
               inactiveColor = '#3e2465'
               barStyle = {{backgroundColor:'#694fad'}}
          >
              <Tab.Screen name="screen1" component={Screen1}/>
              <Tab.Screen name = "screen2" component = {Screen2}/>
          </Tab.Navigator>
        </NavigationContainer>
        </>
    )
}

export default MaterialTop