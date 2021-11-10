import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import GetMap from "./GoogleMapss";
import MapsBtn from "./MapsBtn";
const Stack = createStackNavigator();
const Mapsss = () =>{
    return(
        <>
        <NavigationContainer>
         <Stack.Navigator>
             <Stack.Screen name = "mapsco" component={MapsBtn}/>
             <Stack.Screen name='maps' component = {GetMap}/>
         </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}

export default Mapsss