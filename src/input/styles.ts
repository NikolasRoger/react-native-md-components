import styled from 'styled-components/native';
import Colors, { TColors } from '../config/colors';
import Fonts from '../config/fonts';

type TContainerProps = {
  m?: string
}

type TInputProps = {
  type: TColors,
}

type TLabelProps = {
  textColor: TColors,
}

export const Container = styled.View<TContainerProps>`
  margin: ${({m = "0px"}) => m};
  width: 100%;
`

export const StyledInput = styled.TextInput<TInputProps>`
  background-color: ${(props) => Colors[props.type]};
  border-radius: 10px;
  border: 2px solid #E4E4E4;
  padding: 15px;
  height: 50px;
  width: 100%;
  font-family: ${Fonts.primary};
`;

export const Label = styled.Text<TLabelProps>`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => Colors[props.textColor]};
  margin-bottom: 10px;
  font-family: ${Fonts.primary};
`;

export const ErrText = styled.Text`
  color: ${Colors.danger};
  margin-top: 5px;
`