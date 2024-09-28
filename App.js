import React, {useState, useEffect} from 'react';
import {Text, View, StatusBar, Image} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#282c34'}}>
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

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./src/images/pemandangan.jpg')}
          style={{width: 250, height: 250}}
        />
      </View>
    </View>
  );
};

export default App;
