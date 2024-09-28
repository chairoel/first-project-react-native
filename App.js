import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <StatusBar backgroundColor={'#fafafa'} barStyle={'dark-content'} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('./src/images/pemandangan.jpg')}
            style={styles.photo}
          />
        </View>

        <Text style={styles.textLogin}>Login</Text>
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

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  photo: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 150 / 2,
    borderWidth: 4,
    borderColor: '#546e7a',
  },
  textLogin: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  buttonLogin: {
    backgroundColor: '#0288d1',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
});

export default App;
