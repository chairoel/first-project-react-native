import React, {useState, useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';

const App = () => {
  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor={'#21252b'} />
      <View
        style={{
          backgroundColor: '#21252b',
          paddingHorizontal: 20,
          paddingVertical: 20,
          elevation: 3,
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
          }}>
          Aplikasoi kaomoji
        </Text>
      </View>
    </View>
  );
};

export default App;
