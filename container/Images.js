import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./ImagesCss";

const Images = () => {
    const[initial,setInitial] = React.useState(false);
    const onBtnClickHandler = () => {
        setInitial(!initial)
    }
    return(
        <View style={styles.imageCompContainer}>
<Pressable
style = {styles.btn}
onPress = {onBtnClickHandler}
>
<Text>{initial?'done':'error'}</Text>
</Pressable>
{/* {
    initial?
<Image
 source = {require('../assets/done.jpg')}
/> :
<Image
 source = {require('../assets/error.jpg')}/>
      }     */}
      <View>
          <Image source={initial?require('../assets/done.jpg'):require('../assets/error.jpg')}/>
      </View>
        </View>
    );
};
export default Images