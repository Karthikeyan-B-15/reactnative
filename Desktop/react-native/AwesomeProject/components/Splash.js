import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('home');
  }, 3000);
  return (
    <View style={styles.viewinfo}>
      <Image
        style={styles.imageinfo}
        source={require('../assets/relogo.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewinfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#36374f',
  },
  imageinfo: {
    width: 150,
    height: 150,
  },
});
export default Splash;
