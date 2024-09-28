import React, {useState, useEffect} from 'react';
import {StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <StatusBar backgroundColor={'#fafafa'} barStyle={'dark-content'} />

      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 24,

          color: '#000000',
        }}>
        Login
      </Text>
      <Text style={{textAlign: 'center'}}>
        Silahkan masukkan email dan password
      </Text>

      <TextInput
        value={email}
        style={{
          backgroundColor: '#FFFFFF',
          elevation: 2,
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 8,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        placeholder="Masukkan Email"
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        value={password}
        style={{
          backgroundColor: '#FFFFFF',
          elevation: 2,
          marginHorizontal: 20,
          marginTop: 10,
          borderRadius: 8,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        placeholder="Masukkan Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry // same like "secureTextEntry={true}""
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#0288d1',
          marginHorizontal: 20,
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',

          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 8,
        }}>
        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
