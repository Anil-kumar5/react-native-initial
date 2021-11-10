import React from 'react';
import { Text, View,Button } from 'react-native';


const ScreenBM = () => {
    const [count , setCount ] = React.useState(null);
    const onClickHandler = () => {
        setCount(count+1)
    }
    return(
        <View>
             <Button
        title = 'click'
        onPress = {onClickHandler}>
        </Button>
        <Text>{count}</Text>
            <Text>
                Screen B
            </Text>
        </View>
    )
}

export default ScreenBM