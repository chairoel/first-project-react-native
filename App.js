import React, {useState, useEffect} from 'react';
import {Alert, StatusBar, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  function hello(name) {
    Alert.alert(`hello ${name}`);
  }

  return (
    <View style={{flex: 1, backgroundColor: '#282c34'}}>
      <StatusBar backgroundColor={'#282c34'} barStyle={'light-content'} />

      <TouchableOpacity
        style={{
          backgroundColor: '#0288d1',
          marginHorizontal: 30,
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',

          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 8,
        }}
        onPress={() => hello('cinta')}>
        <Text style={{fontSize: 18, color: 'white'}}>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
