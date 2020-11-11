import React from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import PeopleDetailsPage from './src/pages/PeopleDetailsPage';
import PeoplePage  from './src/pages/PeoplePage'


const Stack = createStackNavigator();
function App(){
  return(
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PeoplePage">
          <Stack.Screen name="Lista de Contatos" component={PeoplePage} />
          <Stack.Screen name="Detalhes do Contato" component={PeopleDetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff' 
    }
  }
)

export default App;