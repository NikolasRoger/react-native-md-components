import React from 'react';
import Colors, {TColors} from '../config/colors';
import {Container, StyledInput} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import type { TextInputProps } from 'react-native';

interface IProps extends TextInputProps {
  m?: string
  type: TColors
}

const SearchBar = ({m, type, ...rest}: IProps) => {
  return (
    <Container m={m} type={type}>
      <Icon name="ios-search" color={Colors['inputItens']} size={25} />
      <StyledInput placeholder="Digite o que procura" {...rest} />
      <Icon name="mic-sharp" color={Colors['inputItens']} size={28} />
    </Container>
  );
};

export default SearchBar;
