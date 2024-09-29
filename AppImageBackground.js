import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('./src/images/pemandangan.jpg')}
        style={{marginHorizontal: 30, marginTop: 10}}
        imageStyle={{borderRadius: 8}}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: 15,
            borderRadius: 8,
          }}>
          <Text style={{color: '#FFFFFF'}}>Image Bacground</Text>
          <Text style={{color: '#FFFFFF'}}>Image Bacground</Text>
          <Text style={{color: '#FFFFFF'}}>Image Bacground</Text>
          <Text style={{color: '#FFFFFF'}}>Image Bacground</Text>
          <Text style={{color: '#FFFFFF'}}>Image Bacground</Text>
          <Text style={{color: '#FFFFFF'}}>Image Bacground</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
