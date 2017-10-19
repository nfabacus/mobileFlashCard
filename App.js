import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import AddDeck from './components'


export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          
          <Text>Mobile Flashcards!</Text>
          <AddDeck />

        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
