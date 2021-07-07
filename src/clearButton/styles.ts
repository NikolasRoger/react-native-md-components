import styled from 'styled-components/native';
import Colors, {TColors} from '../config/colors'
import Fonts from '../config/fonts';

type TContainerProps = {
  m?: string
}

type TTextProps ={
  textColor: TColors
}

export const Container = styled.TouchableOpacity<TContainerProps>`
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.m || "0px"};
  flex-direction: row;
`

export const Text = styled.Text<TTextProps>`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => Colors[props.textColor]};
  font-family: ${Fonts.primary};
`
