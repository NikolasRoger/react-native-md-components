import React from 'react';
import Colors, {TColors} from '../config/colors';
import {Container, StyledInput} from './style';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
  m?: string;
  type: TColors;
}

const SearchBar = (props: IProps) => {
  return (
    <Container m={props.m} type={props.type}>
      <Icon name="ios-search" color={Colors['inputItens']} size={25} />
      <StyledInput placeholder="Digite o que procura" />
      <Icon name="mic-sharp" color={Colors['inputItens']} size={28} />
    </Container>
  );
};

export default SearchBar;
