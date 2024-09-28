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
  Button,
  Alert,
} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{marginHorizontal: 24, marginTop: 12}}>
        <Button
          title="Login"
          color={'#212121'}
          onPress={() => Alert.alert('hello world')}
        />
      </View>
    </View>
  );
};

export default App;
