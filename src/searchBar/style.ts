import styled from 'styled-components/native';
import Colors, { TColors } from '../config/colors';
import Fonts from '../config/fonts';

type TContainerProps = {
  m?: string
  type: TColors
}

export const Container = styled.View<TContainerProps>`
  background-color: ${(props) => Colors[props.type]};
  border-radius: 10px;
  border: 2px solid #E4E4E4;
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  margin-top: ${(props) => props.m || "0px"};
  `

export const StyledInput = styled.TextInput`
  font-family: ${Fonts.primary};
  flex: 1;
`;