import React from 'react';
import Colors from '../config/colors';
import {Container, Coin} from './styles';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

const IconButton = () => {
  const navigation =
    useNavigation<StackNavigationProp<any, 'HomeTabs'>>();
  return (
    <Container
      onPress={() => navigation.push('SurveyInitial')}
      color={Colors['bg']}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}>
      <Coin source={require('../assets/moeda.png')}></Coin>
    </Container>
  );
};

export default IconButton;
