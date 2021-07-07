import React from 'react';
import {Container, Address} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../config/colors';

interface IProps {
  address: string;
  m?: string;
}

const AddressSelect = (props: IProps) => {
  return (
    <Container m={props.m}>
      <Icon name="ios-location-sharp" color={Colors['titles']} size={26} />
      <Address>{props.address}</Address>
      <Icon name="chevron-down-outline" color={Colors['titles']} size={30} />
    </Container>
  );
};

export default AddressSelect;
