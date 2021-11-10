import React, {useState} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const Initial = () => {
  const [details, setDetails] = useState({name: '', age: null, role: ''});
  const onClickHandler = () => {
    setDetails(
      {
        name: 'anil',
        age: 12,
        role: 'developer',
      },
    );
  };
  return (
    <>
      <View>
        <Text style = {styles.text1}>{details.name}</Text>
        <Text style = {styles.text2}>{details.age}</Text>
        <Text style = {{backgroundColor: 'black', color:'#ffffff'}}>{details.role}</Text>
      </View>
      <Button title='click' onPress={onClickHandler}></Button>
      <Text>
        inlinestyling and default styling
      </Text>
    </>
  );
};
const styles = StyleSheet.create({
  text1: {
    color: 'red',
    // fontFamily :'noto'
  },
  text2: {
    fontSize: 40,
    textAlign: 'center'
  }
})
export default Initial;
