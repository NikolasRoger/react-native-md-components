import React from 'react';
import type { TextInputProps } from 'react-native';
import type {TColors} from '../config/colors';
import {StyledInput, Label, Container} from './styles';

interface IProps extends TextInputProps {
  type: TColors;
  textColor: TColors;
  label?: string;
  placeholder?: string;
  m?: string;
}

const Input = ({m, label, textColor, type, ...rest}: IProps) => {
  return (
    <Container m={m}>
      {label && <Label textColor={textColor}>{label}</Label>}
      <StyledInput
        type={type}
        {...rest}></StyledInput>
    </Container>
  );
};

export default Input;
