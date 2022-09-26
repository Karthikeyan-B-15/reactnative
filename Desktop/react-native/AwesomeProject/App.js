/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgb(71, 85, 105)',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#fff',
          display: 'flex',
          fontSize: 50,
        }}>
        {count}
      </Text>
      <Button
        title="click me"
        onPress={() => setCount(prevCount => prevCount + 1)}
      />
    </View>
  );
};

export default App;
