import React from 'react';
import type { TextInput, TextInputProps } from 'react-native';
import type {TColors} from '../config/colors';
import {StyledInput, Label, Container, ErrText} from './styles';

interface IProps extends TextInputProps {
  type: TColors;
  textColor: TColors;
  label?: string;
  placeholder?: string;
  m?: string;
  error?: string | null;
}

const Input = React.forwardRef(({m, label, textColor, error, type, ...rest}: IProps, ref?: React.Ref<TextInput>) => {
  return (
    <Container m={m}>
      {label && <Label textColor={textColor}>{label}</Label>}
      <StyledInput
        type={type}
        ref={ref}
        {...rest}></StyledInput>
      {error && <ErrText>{error}</ErrText>}
    </Container>
  );
});

export default Input;
