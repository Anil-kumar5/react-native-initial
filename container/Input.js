import React, { useState } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, ToastAndroid, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

const Input = () => {
    const [name, setName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const onSubmitHandler = () => {
        if (name.length > 3) {
            setIsSubmitted(!isSubmitted)
        } else {
            // Alert.alert('warning', 'the name must be more than 3 characters', [
            //     { text: 'Do not show again ', onPress: () => console.warn('show again clicked') },
            //     { text: 'cancel', onPress: () => console.warn('cancel pressed') },
            //     { tetx: 'ok', onPress: () => console.warn('okie clicked') },
            // ], { cancelable: true, onDismiss: () => console.warn('alert dismissed')})
            // ToastAndroid.showWithGravity(
            //     'the name must be longer than 3 characters',
            // ToastAndroid.LONG,
            // ToastAndroid.CENTER
            // )
            // ToastAndroid.show(
            //     'name must be more than 3 characters',
            // ToastAndroid.LONG,
            // )
            ToastAndroid.showWithGravityAndOffset(
                'the name must be longer than 3 characters',
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                100,
                200
            )
        }
    }
    return (
        <View>
            <Text>Enter name:</Text>
            <TextInput style={styles.input}
                onChangeText={text => setName(text)}
                value={name}
                placeholder="enter your name"
                keyboardType='default'
            // multiline in keypad we get a icon related to next like enter icon
            // maxLength = {4} text length wont be more than 4
            // editable = {false} we cant edit anythig like input is not clickable
            // secureTextEntry the text we entered turns into secure within seconds
            />
            <Button
                title={`submit`}
                onPress={onSubmitHandler}
                disabled={isSubmitted}
            />
            <TouchableOpacity
                onPress={onSubmitHandler}
                style={styles.btn}
                activeOpacity={0.6}
            >
                <Text>{isSubmitted ? 'clear' : 'submit'}</Text>
            </TouchableOpacity>
            <TouchableHighlight
                style={styles.btn}
                onPress={onSubmitHandler}
                underlayColor='#ddd'
                activeOpacity={0.3}>
                <Text>{isSubmitted ? 'clear' : 'submit'}</Text>
            </TouchableHighlight>
            <TouchableWithoutFeedback
                onPress={onSubmitHandler}>
                <Text style={{ backgroundColor: 'red' }}>{isSubmitted ? 'clear' : 'submit'}</Text>

            </TouchableWithoutFeedback>
            <Pressable
                onPress={onSubmitHandler}
                // onLongPress = {onSubmitHandler}
                // long press btn works if we continuously clicked on btn for specific seconds 
                //  delayLongPress = {5000}
                // long process works after 5 seconds
                hitSlop={{ top: 10, left: 20, right: 40, bottome: 0 }}
                android_ripple={{ color: 'green' }}
                style={({ pressed }) => [
                    styles.btn,
                    { backgroundColor: pressed ? 'violet' : 'brown' }
                ]}
            // by using hit slop we can provide extra space , and if we click on those spaces alos btn function works 
            // disabled = {isSubmitted}

            >
                <Text>{isSubmitted ? 'RESET' : 'SUBMIT'}</Text>
            </Pressable>
            {
                isSubmitted ?
                    <Text>you are registered as {name}</Text> :
                    null
            }

        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: 300,
        borderRadius: 10,
        borderColor: 'blue',
        textAlign: 'center',
        marginLeft: 10
    },
    btn: {
        backgroundColor: 'pink',
        padding: 5,
        width: 100,
        alignItems: 'center',
    }
})
export default Input