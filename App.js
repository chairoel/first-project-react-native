import React, {useState, useEffect} from 'react';
import {
  Alert,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

const App = () => {
  function hello() {
    Alert.alert(`hello saya`);
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

        // action click
        // onPress={() => hello()} // on click default
        // onPressIn={() => hello()} //ketika button di tahan
        // onPressOut={() => hello()} // ketika button di lepas
        // onLongPress={() => hello()} // on long click default
      >
        <Text style={{fontSize: 18, color: 'white'}}>Hello</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}
        onPress={() => hello()}>
        <Image
          source={require('./src/images/pemandangan.jpg')}
          style={{
            width: 250,
            height: 250,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,

            // borderRadius: 250 / 2,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 9,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 9,
            borderWidth: 2,
            borderColor: 'white',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0288d0',
          marginHorizontal: 30,
          borderRadius: 20,
          paddingVertical: 10,
        }}
        onPress={() => hello()}>
        <Image
          source={require('./src/images/pemandangan.jpg')}
          style={{
            width: 250,
            height: 250,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,

            // borderRadius: 250 / 2,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 9,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 9,
            borderWidth: 2,
            borderColor: 'white',
          }}
        />

        <Text style={{color: 'white'}}>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
