import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default class PeopleDetailsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            "people": props.route.params.people
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Image style={styles.avatar} source={{uri: this.state.people.picture.large}}/>
                </View>

                <View style={styles.detalhes}>
                    <Text style={styles.texto}>Nome: {this.state.people.name.first}</Text>
                    <Text style={styles.texto}>Sobrenome: {this.state.people.name.last}</Text>
                    <Text style={styles.texto}>Email: {this.state.people.email}</Text>
                    <Text style={styles.texto}>Celular: {this.state.people.phone}</Text>
                    <Text style={styles.texto}>Estado: {this.state.people.location.state}</Text>
                    <Text style={styles.texto}>Cidade: {this.state.people.location.city}</Text>
                    <Text style={styles.texto}>Idade: {this.state.people.registered.age}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 1,
        backgroundColor: '#B0E0E6',
        flex:1
    },
    avatar: {
        aspectRatio: 1,
        marginLeft: 40,
        marginRight: 20,
        borderRadius: 90,
        marginTop: 20
    },
    detalhes: {
        alignItems: 'center',       
        padding: 10 
    },
    texto: {
        color: '#000',
        fontSize: 20,
        height: 50,
        width: '100%',
        borderWidth: 2,
        borderColor: '#000', 
        borderRadius:10,
        marginTop: 5,
        paddingTop: 10,
        paddingLeft: 8
    }
})