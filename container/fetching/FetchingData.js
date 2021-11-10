import React from 'react';
import { View , Text, FlatList, StyleSheet , TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FetchUsersData } from '../../redux/Actions';
import PushNotification from 'react-native-push-notification';
import { color } from 'react-native-reanimated';
const FetchingData = ({navigation}) => {
    const users = useSelector(state => state.data);
    const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(FetchUsersData());
      createChannels();
    },[]);
    const createChannels = () => {
      PushNotification.createChannel(
        {
          channelId : "test-channel",
          channelName : "Test Channel"
        }
      )
    }
    const handleNotification = (item,index) => {

      PushNotification.cancelAllLocalNotifications();
      // it means the previous displayed notifications disappears
      PushNotification.localNotification({
        channelId : "test-channel",
        title : "you clicked on" + item.name,
        message : item.address.city,
        bigText : item.name + "is lives in one of beautiful city names as" + item.address.city,
        // if we use bigtext we can convert single message into bigtext by clicking on arrow icon vice versa
         color : 'red',
         id:index,
         // if you dont use id then , if you clicks same button multiple times then it also displays multiple times

      });
      PushNotification.localNotificationSchedule({
        channelId : 'test-channel',
        title : "Alarm",
        message : "you clicked on" + item.name + "20 seconds ago",
        date : new Date(Date.now()+20*1000),
        allowWhileIdle:true
      })
      // this one is used to schedule the notification
      // initially localnotification method diplays
      // after 20 seconds it again displays with the message what  we wrote in this method
    }
    return(
        <View>
       <Text>usersdata is</Text>
       <FlatList
       data = {users}
       renderItem = {({item,index}) => {
         return(
           <View>
             <TouchableOpacity 
             style={styles.touchableBtn}
             onPress = {() => handleNotification(item,index) 
            }
             >
             <Text style={styles.dataText}>
               <Text style={{color:'green'}}>{item.name}</Text> 
               and address is 
               <Text style={{color:'purple'}}>{item.address.city}</Text>
               </Text>
               </TouchableOpacity>
           </View>
         )
       }}
       >

       </FlatList>
        </View>
    );
};

 const styles = StyleSheet.create({
   touchableBtn : {
     padding:10
   },
   dataText:{
     padding:5,
     backgroundColor:'pink',
     borderWidth:1,
     marginBottom:10
   }
 })
export default FetchingData