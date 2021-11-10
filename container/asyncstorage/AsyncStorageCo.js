import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import Home from "./Home";
import Login from "./Login";
const Stack = createStackNavigator();
const AsyncStorageCo = () => {
    return(
      <>
      <NavigationContainer>
          <Stack.Navigator
            initialRouteName = "login"
            screenOptions = {{
                headerTitleAlign : 'center',
                headerStyle : {
                    backgroundColor : '#0080ff'
                },
                headerTintColor : '#fff',
                headerTitleStyle:{
                    fontSize : 25,
                    fontWeight : 'bold'
                }
            }}
          >
              <Stack.Screen 
              name  = "login" 
              component = {Login}
              options = {{
                  headerShown : false
              }}
              />
              <Stack.Screen name = "home" component = {Home}/>
          </Stack.Navigator>
      </NavigationContainer>
      </>
    );
};

export default AsyncStorageCo