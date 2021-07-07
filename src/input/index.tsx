import React from 'react';
import type {TColors} from '../config/colors';
import {StyledInput, Label, Container} from './styles';

interface IProps {
  type: TColors;
  textColor: TColors;
  label?: string;
  placeholder?: string;
  m?: string;
}

const Input = (props: IProps) => {
  return (
    <Container m={props.m}>
      {props.label && <Label textColor={props.textColor}>{props.label}</Label>}
      <StyledInput
        type={props.type}
        placeholder={props.placeholder}></StyledInput>
    </Container>
  );
};

export default Input;
