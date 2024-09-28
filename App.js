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
      <Button
        title="Login"
        color={'#212121'}
        onPress={() => Alert.alert('hello world')}
      />
    </View>
  );
};

export default App;
