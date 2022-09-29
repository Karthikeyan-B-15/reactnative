import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../AwesomeProject/components/Home';
import List from '../AwesomeProject/components/List';
import Api from '../AwesomeProject/components/Api';
import Splash from './components/Splash';
import {Header} from 'react-native/Libraries/NewAppScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(71, 85, 105)',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="list" component={List} />
        <Stack.Screen name="Api call" component={Api} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
