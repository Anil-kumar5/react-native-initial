import React from "react";
import { Alert, Button, Text, View } from "react-native";
import MapView from 'react-native-maps';
 function GetMap() {
    return (
        <View>
            {/* <MapView
            style={{width:'100%',height:'100%'}}
          initialRegion={{
          latitude:40.71692902600371,
         longitude:-74.01542790234286,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
         }}
  /> */}
    <MapView
    style={{width:'100%',height:'100%'}}
    initialRegion={{
      latitude: -33.86995736018323,
      longitude: 
      151.19994316536426,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />

        </View>
    );
};
export default GetMap