import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements';

export default function Inicio({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'flex-start', padding: 40 }}>
      <Avatar
        size="xlarge"
        rounded
        source={{
          uri:
            'https://img.freepik.com/fotos-premium/cao-beagle-bonito-com-uma-coroa-de-flores-sobre-fundo-branco-retrato-de-primavera-de-um-cachorro_598835-625.jpg',
        }}
      />
      <View style={{ paddingTop: 20, justifyContent: 'center' }}>
        <Input
          placeholder='EMAIL'
          leftIcon={
            <Icon
              name='user'
              size={15}
              color='pink'
            />
          }
        />
        <Input
          placeholder='SENHA'
          leftIcon={
            <Icon
              name='paw'
              size={15}
              color='pink'
            />
          }
        />
        <View style={{ padding: 20 }}>
          <Button
            title="ENTRAR"
          />
          <View style={{ padding: 10 }}>
            <Button
              onPress={() => navigation.navigate('Register')}
              title="CADASTRAR"
            />
            <View style={{ padding: 10 }}>
              <Button
                title="Redefinir senha"
                type="clear"
                size={5}
              />
              <View style={{ padding: 10 }}>
                <SocialIcon
                  title='Entrar com Facebook'
                  button
                  light
                  type='facebook'
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

