import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return(
        <>
        <NavigationContainer>
         <Drawer.Navigator
         initialRouteName = "screen2"
        //  drawerPosition = "right"
        // drawerType = "front"
        // hideStatusBar = {true} 
        // overlayColor = '#000'
        drawyerStyle = {{
            backgroundColor:'pink',
            width:150
        }}
        screenOptions = {{
            headerShown : true,
            //bar icon hidden when it set's as false
            swipeEnabled :false,
           // without clicking on bars we cant open with slide
             gestureEnabled :false,
             // it means when we click on the bars slider opens but without 
             //clicking any option it never closes 
             //it means touching outside the slider wont works
             headerTitleAlign : 'center',
             headerStyle :{
                 backgroundColor : '#0080ff'
             },
             headerTintColor :'white',
             headerTitleStyle :{
                 fontSize :25,
                 fontWeight:'bold'
             }
        }}
         >
             <Drawer.Screen name="screen1" component={Screen1}
             options = {{
                 title :'screeeeeeeeeeeen_1',
                 drawerIcon :({focused}) => (
                     <FontAwesome5
                     name = "btc"
                     size = {focused?25:20}
                     color = {focused?'pink':'blue'}
                     /> 
                 )
             }}
             />
             <Drawer.Screen name="screen2" component = {Screen2}/>
         </Drawer.Navigator>
        </NavigationContainer>
        </>
    )
}

export default DrawerNav