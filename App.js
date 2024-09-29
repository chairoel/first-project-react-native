import React, {useState, useEffect} from 'react';
import {FlatList, Image, StatusBar, Text, View} from 'react-native';

const negara = [
  'indonesia',
  'jepang',
  'amerika',
  'afrika',
  'chaina',
  'thailand',
  'australia',
];

const daftarNegara = [
  {
    nama: 'Indonesia',
    deskripsi: 'ini adalah deskripsi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Indonesia_%28physical_version%29.svg/800px-Flag_of_Indonesia_%28physical_version%29.svg.png',
  },
  {
    nama: 'Amerika',
    deskripsi: 'ini adalah deskripsi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/285px-Flag_of_the_United_States.svg.png',
  },
];

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#21252b'}}>
      <StatusBar backgroundColor={'#21252b'} barStyle={'light-content'} />

      {/* <FlatList
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
      /> */}

      <FlatList
        data={daftarNegara}
        renderItem={({item, index}) => (
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: '#282c34',
              paddingTop: 50,
              paddingBottom: 50,
              borderRadius: 4,
              elevation: 3,
              flexDirection: 'row',
            }}>
            <View style={{marginLeft: 20, justifyContent: 'center', flex: 1}}>
              <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
                {item.nama}
              </Text>
              <Text style={{color: '#FFFFFF'}}>{item.deskripsi}</Text>
            </View>
            <Image
              style={{
                width: 75,
                height: 50,
                borderRadius: 8,
                marginLeft: 20,
                marginRight: 20,
              }}
              source={{uri: item.image}}
            />
          </View>
        )}
      />
    </View>
  );
};

export default App;
