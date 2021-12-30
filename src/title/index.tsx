import React from 'react';
import type {TColors} from '../config/colors';
import {BaseTitle} from './styles';

interface IProps {
  color: TColors;
  title: string;
  m?: string;
  mb?: string;
  ml?: string
  weight?: number;
  size?: number;
}

const Title = (props: IProps) => {
  return (
    <BaseTitle ml={props.ml} m={props.m} size={props.size} weight={props.weight} color={props.color} mb={props.mb}>
      {props.title}
    </BaseTitle>
  );
};

export default Title;
