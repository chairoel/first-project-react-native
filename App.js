import React, {useState, useEffect} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';

let saldo = 100000;

const App = () => {
  function hitungDiskon() {
    saldo = saldo - 10000;
    Alert.alert('Saldo saya: ' + saldo);
  }

  return (
    <View>
      <Text>{saldo}</Text>
      <TouchableOpacity onPress={() => hitungDiskon()}>
        <Text>Hitung Diskon</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
