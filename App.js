import React, {useState, useEffect} from 'react';
import {Alert, StatusBar, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  function hello(name) {
    Alert.alert(`hello ${name}`);
  }

  return (
    <View style={{flex: 1, backgroundColor: '#282c34'}}>
      <StatusBar backgroundColor={'#282c34'} barStyle={'light-content'} />

      <TouchableOpacity onPress={() => hello('cinta')}>
        <Text style={{fontSize: 48, color: 'white'}}>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
