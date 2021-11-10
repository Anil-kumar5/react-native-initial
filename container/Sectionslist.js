import React, {useState} from 'react';
import { SectionList, View, Text } from 'react-native';
const Sectionslist = () => {
    const DATA = [
        {
            name:'anil',
            favPlaces: ['vizag', 'ladakh', 'sdkjzhui']
        },
        {
            name:'anil',
            favPlaces: ['vizag', 'ladakh']
        },
        {
            name:'anil',
            favPlaces: ['vizag', 'ladakh', 'sdkjzhui']
        },
        {
            name:'anil',
            favPlaces: ['vizag',  'sdkjzhui']
        },
        {
            name:'anil',
            favPlaces: ['vizag', 'ladakh', 'sdkjzhui']
        },
        {
            name:'anil',
            favPlaces: ['vizag', 'ladakh', 'sdkjzhui']
        },
        {
            name:'anil',
            favPlaces: ['vizag']
        },
        {
            name:'anil',
            favPlaces: ['vizag', 'ladakh', 'sdkjzhui']
        },
        {
            name:'anil',
            favPlaces: ['vizag', 'ladakh', 'sdkjzhui']
        },

    ]
    return(
        <>
        <SectionList
        sections = {DATA}
        renderItem = {({item}) => (
            <View>
                <Text>{item}</Text>
            </View>
        )}
        >

        </SectionList>
        </>
    )
}
export default Sectionslist