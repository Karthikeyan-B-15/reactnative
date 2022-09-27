import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../AwesomeProject/components/Home';
import List from '../AwesomeProject/components/List';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(71, 85, 105)',
          },
        }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="list" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
