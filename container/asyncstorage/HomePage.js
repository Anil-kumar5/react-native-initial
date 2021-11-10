import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../custombutton/CustomButtonCreation";

const HomePage = ({navigation}) => {
    const [name , setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [ updatedName , setUpdatedName ] = React.useState('');
    React.useEffect(() => {
           getData();
    },[]);
    const getData = () => {
    try {
        AsyncStorage.getItem('userData')
        .then(value => {
            if(value != null){
                let user = JSON.parse(value);
                setName(user.Name)
                setUpdatedName(user.Name)
                setPassword(user.Password)
            }
        })
        
    } catch (error) {
     console.log(error);   
    }
    }
    const updatedData = async() => {
        if(name.length == 0){
            Alert.alert('warning!','please write your name');
             } else {
           try {
                var user = {
                    Name : name
                }
               await AsyncStorage.mergeItem('userData', JSON.stringify(user));
               setUpdatedName(user.Name)
               Alert.alert('successfully updated')
           } catch (error) {
                console.log('error',error);
           }
        }
    }
    const removeData = async() => {
           try {
               await AsyncStorage.removeItem('userName');
               navigation.navigate('login')
           } catch (error) {
                console.log('error',error);
           }
    }
    return(
        <View style={styles.homepageContainer}>
            <Text style={styles.userName}>hello {updatedName}</Text>
            <Text>{password}</Text>
            <TextInput 
                style = {styles.input}
               value = {name} 
               onChangeText = {(value) => setName(value)}
        />
        <CustomButton
          title = 'Update'
          colour = '#ff7f00'
          onPressedFunction = {updatedData}
          />
           <CustomButton
          title = 'Logout'
          colour = 'red'
          onPressedFunction = {removeData}
          />
               </View>
    )
}
const styles = StyleSheet.create({
    homepageContainer : {
        flex :1,
        justifyContent:'center',
        alignItems : 'center'
    },
    userName : {
        fontFamily  :'noto'
    },
    input : {
        width : 300,
        borderWidth  : 1,
        borderColor : '#555',
        backgroundColor : '#fff',
        borderRadius : 10,
        fontSize : 20,
        marginTop : 130,
        marginBottom : 10,
        textAlign : 'center'
    }
})
export default HomePage