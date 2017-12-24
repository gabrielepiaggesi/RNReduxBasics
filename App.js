import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components';
import LibraryList from './components/LibraryList'

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
    <View style={{flex:1}}>
      <Header title={'Redux'} />
      <LibraryList />
    </View>
    </Provider>
  );
};



export default App;
