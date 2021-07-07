import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const Info = styled.Text`
  font-family: ${Fonts.primary};
  font-size: 16px;
  color: ${Colors['titles']};
  flex: 1;
`

export const InfoValue = styled.Text`
  font-family: ${Fonts.primary};
  font-size: 16px;
  color: ${Colors['text']};
`