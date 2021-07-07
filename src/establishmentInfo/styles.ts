import styled from 'styled-components/native';
import Colors, { TColors } from '../config/colors';
import Fonts from '../config/fonts';

type TTagContainerProps = {
  tagBg: TColors
}

type TTagContentProps = {
  tagTextColor: TColors
}

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
`;

export const TimeContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
`
export const Address = styled.Text`
  color: ${Colors['text']};
  font-family: ${Fonts.primary};
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 4px;
`

export const TagContainer = styled.View<TTagContainerProps>`
  padding: 2px 10px;
  background-color: ${(props) => Colors[props.tagBg]};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

export const TagContent = styled.Text<TTagContentProps>`
  font-family: ${Fonts.primary};
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => Colors[props.tagTextColor]};
`

export const SecondRow = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
`
export const Time = styled.Text`
  font-family: ${Fonts.primary};
  font-weight: 400;
  font-size: 16px;
  color: ${Colors['text']};
  margin-left: 5px;
`