import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 48,
          fontWeight: '900',
          color: '#3627ab',
        }}>
        Hello World
      </Text>
      <Text>Description 1</Text>
    </View>
  );
};

export default App;
