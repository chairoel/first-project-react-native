import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'auto',
          fontSize: 16,
          // fontWeight: '900',
          // color: '#3627ab',
          // marginTop: 30,
          // marginBottom: 30,
          // marginVertical: 30,
          // marginLeft: 20,
          // marginRight: 20,
          // marginHorizontal: 30,
          // margin: 10,

          // letterSpacing: 20,
          // lineHeight: 25,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum
        arcu et enim sodales vehicula. Fusce imperdiet sem nec orci malesuada,
        ac euismod ipsum pharetra. Aliquam vel tellus a mauris iaculis blandit.
        Nunc nisi sem, fermentum at metus eu, eleifend vestibulum tellus. Nullam
        vestibulum magna vitae hendrerit sagittis. In at imperdiet est, ut
        iaculis tellus. Nam sodales aliquet justo in aliquet.
      </Text>
      <Text>Description 1</Text>

      <View
        style={{
          marginVertical: 12,
          width: 200,
          height: 200,
          backgroundColor: 'red',
          borderRadius: 9,
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexDirection: 'column',
        }}>
        <Text style={{color: 'white'}}>Hello</Text>
        <Text style={{color: 'white'}}>Hello</Text>
        <Text style={{color: 'white'}}>Hello</Text>
        <Text style={{color: 'white'}}>Hello</Text>
      </View>
    </View>
  );
};

export default App;
