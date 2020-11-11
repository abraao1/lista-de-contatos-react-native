import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PeopleList from '../component/PeopleList'

export default class PeoplePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      peoples: []
    }
  }
 //http://demo5410349.mockable.io/pessoas/?nat=br&results=10
  componentDidMount(){
    axios
    .get('https://run.mocky.io/v3/4f6308de-ea23-4ebc-9191-e0e48992a60d')
    .then(response => {
      const {results} = response.data
      this.setState({
        peoples: results
      })
    })  
  }
 
  render(){
    return (
        <View>
            <PeopleList peoples={this.state.peoples}
            onPressItem={(people) => {
              this.props.navigation.navigate('Detalhes do Contato' , {"people": people})
              }} /> 
        </View>
    );
  }
 
}