import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
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
  );
};

export default App;
