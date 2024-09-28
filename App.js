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
          style={{
            width: 250,
            height: 250,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,

            borderRadius: 250 / 2,
            borderWidth: 2,
            borderColor: 'white',
          }}
        />
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1727461567487-575ec98777fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{width: 250, height: 250}}
        />
      </View>
    </View>
  );
};

export default App;
