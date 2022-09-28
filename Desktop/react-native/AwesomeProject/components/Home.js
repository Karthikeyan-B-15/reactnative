import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Switch,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
const Home = ({navigation}) => {
  const [count, setCount] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(71, 85, 105)'}}>
      <ScrollView>
        <Image
          style={styles.imageInfo}
          source={require('../assets/React-Native.png')}
        />
        <Button title="Navigate" onPress={() => navigation.navigate('list')} />
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          value={isEnabled}
          onValueChange={() => setIsEnabled(ps => !ps)}
        />
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Button
            title="+"
            onPress={() => setCount(prevCount => prevCount + 1)}
          />
          <Text style={styles.textInfo}>{count}</Text>
          <Button
            title="-"
            onPress={() => setCount(prevCount => prevCount - 1)}
          />
        </View>
        <TextInput
          placeholderTextColor="#fff"
          placeholder="Enter Your name"
          style={styles.input}
        />
        <Button title="API" onPress={() => navigation.navigate('Api call')} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  textInfo: {
    color: '#fff',
    display: 'flex',
    fontSize: 50,
  },
  imageInfo: {
    width: '100%',
    height: '20%',
  },
  input: {
    height: 40,
    color: '#fff',
    borderWidth: 1,
    margin: 20,
  },
  text: {
    fontSize: 40,
  },
});

export default Home;
