import React, {useState, useEffect} from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';

const negara = [
  'indonesia',
  'jepang',
  'amerika',
  'afrika',
  'chaina',
  'thailand',
  'australia',
];

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#21252b'}}>
      <StatusBar backgroundColor={'#21252b'} barStyle={'light-content'} />

      <FlatList
        data={negara}
        renderItem={({item, index}) => (
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: '#282c34',
              paddingTop: 50,
              paddingBottom: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              elevation: 3,
            }}>
            <Text style={{color: '#FFFFFF'}}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
