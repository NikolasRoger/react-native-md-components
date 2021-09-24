import React from 'react';
import Colors, {TColors} from '../config/colors';
import {Container, StyledInput, IconContainer} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import type { TextInputProps } from 'react-native';

interface IProps extends TextInputProps {
  m?: string
  type: TColors
  textColor: TColors
  onPress?(): any;
}

const SearchBar = ({m, type, textColor, onPress, ...rest}: IProps) => {
  return (
    <Container m={m} type={type}>
      <StyledInput placeholder="Digite o que procura" textColor={textColor} {...rest} />
      <IconContainer onPress={onPress}>
        <Icon name="ios-search" color={Colors['inputItens']} size={25} />
      </IconContainer>
    </Container>
  );
};

export default SearchBar;
