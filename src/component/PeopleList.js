import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const {peoples, onPressItem} = props

    const renderItem = ({item}) => {
        return (
            <PeopleListItem 
                key={item.name.first} 
                people={item}
                onPressItemDetails={onPressItem}
            />
        )
    }

    const header= () => {
        return (
            <View style={style.cabecalho}>
                <Text style={style.titulo}>
                    Lista de contatos
                </Text>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <SafeAreaView>
                <FlatList
                    data={peoples}
                    renderItem={renderItem}
                    keyExtractor={(item) => {item.name.first}}
                    ListHeaderComponent={header}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#B0E0E6',
            padding: 30,           
        },
        cabecalho: {
            flex: 1,
            height: 50,
            width: '100%',
            backgroundColor: "#5F9EA0",
            justifyContent: "center",
            alignItems: 'center'
        },
        titulo: {
            color: '#000',
            fontSize: 20
        }
    }
)

export default PeopleList