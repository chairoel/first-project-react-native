import React, {useState, useEffect} from 'react';
import {StatusBar, Text, TextInput, View} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');

  return (
    <View>
      <StatusBar backgroundColor={'#fafafa'} barStyle={'dark-content'} />

      <Text>{email}</Text>

      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 24,
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
    </View>
  );
};

export default App;
