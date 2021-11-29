import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width

export const IconContainer = styled.TouchableOpacity`
  margin-left: 30px;
  margin-right: 30px;
  flex-direction: row;
`

export const InfoContainer = styled.View`
  width: ${width + 'px'};
  margin-top: 120px;
  padding-left: 30px;
  padding-right: 30px;
`

export const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
`

export const EstablishmentName = styled.Text`
  font-family: ${Fonts.primarySemiBold};
  font-weight: bold;
  font-size: 18px;
  color: white;
`

export const Container = styled.View`
  height: 300px;
  width: 100%;
  background-color: ${Colors['secondary']};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-top: 30px;
`;

export const Photo = styled.Image.attrs({
  resizeMode: "cover"
})`
  width: 100%;
  height: 280px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  position: absolute;
  z-index: -1;
`

export const StarsQuantity = styled.Text`
  font-family: ${Fonts.primarySemiBold};
  font-weight: bold;
  font-size: 18px;
  color: white;
  margin-left: 5px;
`

export const EstablishmentServices = styled.Text`
  font-family: ${Fonts.primary};
  font-size: 16px;
  color: white;
  
`