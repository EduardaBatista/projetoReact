import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements';
import Inicio from './telas/inicial';
import Cadastro from './telas/cadastro';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Inicio} />
        <Stack.Screen name="Register" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;