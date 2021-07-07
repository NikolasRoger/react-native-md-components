import styled from 'styled-components/native';
import Colors, { TColors } from '../config/colors';
import Fonts from '../config/fonts';

type TContainerProps = {
  m?: string
}

type TBadgeContainerProps = {
  bg: TColors
  bottom: string
}

type TMainContainerProps = {
  mb?: string
}

export const MainContainer = styled.TouchableOpacity<TMainContainerProps>`
  margin-bottom: ${(props) => props.mb || '0px'};
`

export const Container = styled.View<TContainerProps>`
  width: 100%;
  border-radius: 20px;
  background-color: white;
  margin: ${(props) => props.m || '20px 0'};
  
  padding: 20px;
`;

export const StatusRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const IllustrationContainer = styled.View`
  width: 100px;
  height: 50px;
`

export const Illustration = styled.Image.attrs({
  resizeMode: "contain"
})`
  width: 100%;
  height: 100%;
`;

export const StatusContainer = styled.View`
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
  padding-left: 20px;
`

export const Status = styled.Text`
  font-family: ${Fonts.primarySemiBold};
  font-size: 16px;
  color: ${Colors['titles']};
`

export const InfoTitle = styled.Text`
  font-family: ${Fonts.primarySemiBold};
  font-size: 15px;
  color: ${Colors['titles']};
`

export const InfoContent = styled.Text`
  font-family: ${Fonts.primarySemiBold};
  font-size: 15px;
  color: ${Colors['text']};
`

export const InfoContainer  = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`

export const Indicator = styled.Text`
  margin-top: 20px;
  font-family: ${Fonts.primary};
  font-size: 14px;
  color: ${Colors['text']};
`

export const BadgeContainer = styled.View<TBadgeContainerProps>`
  width: 100%;
  height: 43px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: white;
  padding: 3px;
  background-color: ${(props) => Colors[props.bg]};
  position: absolute;
  bottom: ${(props) => props.bottom};
  justify-content: flex-end;
  align-items: center;
`;

export const BadgeContent = styled.Text`
  font-family: ${Fonts.primary};
  font-size: 14px;
  color: ${Colors['titles']};
`

export const EditIconContainer = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  background-color: white;
  border-radius: 50px;
  position: absolute;
  align-self: flex-end;

  justify-content: center;
  align-items: center;
`