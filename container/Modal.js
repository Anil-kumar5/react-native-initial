import React, { useState } from 'react';
import { Modal, Pressable, Text, TextInput, View } from 'react-native';

const ModalFile = () => {
    const [name, setName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [warning, setWarning] = useState(false);
    const onSubmitHandler = () => {
        setIsSubmitted(!isSubmitted)
        if (name.length < 3) {
            setWarning(true)
        }
    }
    return (
        <View style={{ alignItems: 'center' }}>
            <TextInput
                value={name}
                onChangeText={value => setName(value)}
                style={{ width: 200, borderWidth: 1 }}
            />
            <Pressable
                onPress={onSubmitHandler}
                style={{ padding: 10, backgroundColor: 'pink' }}
            >
                <Text>{isSubmitted ? 'clear' : 'submit'}</Text>
            </Pressable>
            <Text>
                {isSubmitted ? `your name submitted as ${name}` : null}
            </Text>
            <Modal
                visible={warning}
                onRequestClose={
                    () => setWarning(false)
                }
                //here onrequestclose is used to write the function to back button in mobiles
                transparent
                // here transparent is for when the modal visibility becomes true then it displays in same page
                animationType='slide'
                hardwareAccelerated
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 250, height: 250, backgroundColor: '#999', borderRadius: 20 }}>
                        <View style={{ backgroundColor: 'yellow', padding: 15, alignItems: 'center', borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>Warning</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'red', textAlign: 'center', fontSize: 16, lineHeight: 25 }}>the name must be longer than three characters</Text>
                        </View>
                        <Pressable
                            onPress={() => setWarning(false)}

                            style={{ backgroundColor: 'pink', padding: 7, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
                            android_ripple={{ color: 'blue' }}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 16 }}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default ModalFile;