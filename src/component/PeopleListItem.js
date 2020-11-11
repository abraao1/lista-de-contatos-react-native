import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {toUpperFirst} from '../Util'
 
const PeopleListItem = props => {
    const {people, onPressItemDetails} = props
    const {first, last} = people.name
    return (
        <TouchableOpacity onPress={() => {
            onPressItemDetails(people)                     
        }}>
        <View style={style.line}>
            <Image style={style.avatar} source={{uri: people.picture.thumbnail}}/>
            <Text style={style.linetext} key={first}>
                {`${
                    toUpperFirst(first)
                } ${
                    toUpperFirst(last)
                }`}
            </Text>            
        </View>
        </TouchableOpacity>
    )
}
 
const style = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        alignItems: 'center',
        flexDirection: 'row'
    },
    linetext:{
        fontSize:20,
        paddingLeft: 20,
        flex: 7
    },
    avatar:{
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderRadius: 50
    }
}
)
 
export default PeopleListItem