import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';

export const Message = styled.Text`
  font-family: ${Fonts.primary};
  font-size: 16px;
  color: ${Colors.text};
  margin-top: 20px;
  margin-bottom: 20px;
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
  margin-bottom: 15px;
  align-items: center;
`

export const TimeInfo = styled.Text`
  margin-top: 15px;
  font-family: ${Fonts.primarySemiBold};
  font-size: 16px;
  color: ${Colors.titles};
`

export const ProgressBarContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 15px;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  margin-bottom: 20px;
`

export const ProgressBar = styled.View`
  width: 30%;
  height: 100%;
  background-color: ${Colors['primary']};
`

export const WarningText = styled.Text`
  font-family: ${Fonts.primary};
  font-size: 14px;
  color: ${Colors.danger};
  margin-bottom: 30px;
`

export const BtnContainer = styled.View`
  width: 100%;
  height: 60px;
`