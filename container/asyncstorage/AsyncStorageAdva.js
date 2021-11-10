import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import Home from "./Home";
import HomePage from "./HomePage";
import Login from "./Login";
import LoginPage from "./LoginPage";
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
              component = {LoginPage}
              options = {{
                  headerShown : false
              }}
              />
              <Stack.Screen name = "home" component = {HomePage}/>
          </Stack.Navigator>
      </NavigationContainer>
      </>
    );
};

export default AsyncStorageCo