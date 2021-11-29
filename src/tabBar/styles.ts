import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';

export const Container = styled.View`

`;

export const TitleContainer = styled.TouchableOpacity`
  flex: 1;
  margin-right: 20px;
  padding-top: 24px;
  padding-bottom: 48px;
`

export const TabTitle = styled.Text`
  text-align: left;
  font-family: ${Fonts.primarySemiBold};
  font-size: 20px;
  color: ${Colors['titles']};
`
