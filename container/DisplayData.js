import React from 'react'
import { View, Text } from 'react-native'
import { useQuery,gql } from '@apollo/client';
const QUERY_ALL_USERS = gql`
query getUsersData {
    users {
      id
      name
      userName
      age
      nationality
      friends {
        age
        name
      }
    }
  }
`
const DisplayData = () => {
    const {data} = useQuery(QUERY_ALL_USERS);
    if(data){
        console.warn(data)
    }
    return (
        <View>
            <Text>dvsd</Text>
        </View>
    )
}

export default DisplayData
