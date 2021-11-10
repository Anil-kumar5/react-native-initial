import React from 'react';
import { Alert,  Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../custombutton/CustomButtonCreation';
const LoginPage = ({navigation}) => {
    const [ name ,setName ] = React.useState('');
    const [ password , setPassword ] = React.useState('');
    const onTextChangeHandler = value => {
        setName(value)
    }
    React.useEffect(() => {
        getData();
 },[]);
 const getData = () => {
 try {
     AsyncStorage.getItem('userData')
     .then(value => {
         if(value != null){
             navigation.navigate('home')
         }
     })
 } catch (error) {
  console.log(error);   
 }
 }
     const setData = async() => {
         if(name.length == 0 || password.length == 0){
             Alert.alert('warning!','please write your name');
              } else {
            try {
                var user = {
                    Name : name,
                    Password : password
                }
                await AsyncStorage.setItem('userData', JSON.stringify(user));
                navigation.navigate('home'); 
            } catch (error) {
                 console.log('error',error);
            }
         }
     }
    return(
        <View style = {styles.body}>
            <Image 
            style = {styles.logo}
            source = {require('../../assets/loginLogo.jpg')}
            />
            <TextInput
             style = {styles.input}
             placeholder = "Enter Your Name"
             onChangeText = {onTextChangeHandler}
            />
             <TextInput
             style = {styles.input}
             placeholder = "Enter Your password"
             onChangeText = {value => setPassword(value)}
            />
            <CustomButton
              onPressedFunction = {setData}
              title = 'Login'
              colour = '#1eb900'
              />
        </View>
    );
};
const styles = StyleSheet.create({
    body:{
        flex :1,
        // justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#0080ff',
    },
    logo : {
        width : 100,
        height : 100,
        marginVertical : 10,
    },
    input : {
        width : 300,
        borderWidth  : 1,
        borderColor : '#555',
        backgroundColor : '#fff',
        borderRadius : 10,
        fontSize : 20,
        // marginTop : 130,
        marginBottom : 10,
        textAlign : 'center'
    }
})
export default LoginPage