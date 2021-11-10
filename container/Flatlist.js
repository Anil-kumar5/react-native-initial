import React, { useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
const Flatlist = () => {
    const [obj, setObj] = useState([
        { emp: 'anil' },
        { emp: 'ncje' },
        { emp: 'ncje' },
        { emp: 'ncjfgcu' },
        { emp: 'ncje' },
        { emp: 'ncje' },
        { emp: 'ncjerfde' },
        { emp: 'ncje' },
        { emp: 'ncbgcfje' },
        { emp: 'ncje' },
        { emp: 'ncje' },
        { emp: 'ncjvbcgfjte' },
        { emp: 'ncje' },
        { emp: 'ncje' },
        { emp: 'fduxbngggggggggggggggggggggruid' }
    ]);
    const [refresh, setRefresh] = useState(false);
    const onRefreshHandler = () => {
        setRefresh(true)
        setObj([...obj, { emp: 'fuicshdnuic' }])
        setRefresh(false)
    }
    return (
        <FlatList
        keyExtractor = {(item,index) => index.toString()}
        // horizontal = {true}
        // inverted
        refreshControl = {
            <RefreshControl 
            refreshing = {refresh}
            onRefresh = {onRefreshHandler}
            colors = {['violet']}
            ></RefreshControl>
        }
        // toString because key must be a string
        // numColumns = {4}
            data={obj}
            renderItem={({ item }) => (
                <View>
                    <Text
                        style={{
                            backgroundColor: 'blue',
                            padding: 5,
                            margin: 10,
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 20,
                        }}
                    >{item.emp}</Text>
                </View>
            )}
        >
        </FlatList>
    )
}

export default Flatlist