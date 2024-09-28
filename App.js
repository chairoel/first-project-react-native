import React, {useState, useEffect} from 'react';
import {StatusBar, View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#282c34'}}>
      <StatusBar backgroundColor={'#282c34'} barStyle={'light-content'} />
    </View>
  );
};

export default App;
