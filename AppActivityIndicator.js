import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <View>
      <ActivityIndicator animating={loading} size={'large'} color={'#21252b'} />
      <TouchableOpacity onPress={() => setLoading(!loading)}>
        <Text>Toogle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
