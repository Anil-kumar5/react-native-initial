import React, { useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

const Scrollviews = () => {
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
    ]);
    const [refresh, setRefresh] = useState(false);
    const onRefreshHandler = () => {
        setRefresh(true)
        setObj([...obj, { emp: 'fuicshdnuic' }])
        setRefresh(false)
    }
    return (
        <ScrollView
        // horizontal = {true} ?????
            refreshControl={
                <RefreshControl
                    refreshing={refresh}
                    onRefresh={onRefreshHandler}
                    colors={['red']}
                >
                </RefreshControl>}
        >
            <View>
                {
                    obj.map((data,index) => {
                        return (
                            <View key = {index}>
                                <Text style = {{
                                      backgroundColor: 'blue',
                                      padding: 5,
                                      margin: 10,
                                      color: 'white',
                                      textAlign: 'center',
                                      fontSize: 20,
                                    }}>{data.emp}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Scrollviews