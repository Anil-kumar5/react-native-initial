import React from "react";
import CustomButton from "./CustomButtonCreation";
import { Text, View } from "react-native";
const CustomButtonUsage1 = () => {
    const [initial,setInitial] = React.useState(false);
    const onClickHandlerOne = () =>{
        setInitial(!initial)
    }
    return(
        <View>
          <Text>{initial?'true':'false'}</Text>
          <CustomButton title = {initial?'true':'false'} onPressedFunction = {onClickHandlerOne}
           style = {{borderRadius : 20}}
          />
        </View>
    )
}

export default CustomButtonUsage1