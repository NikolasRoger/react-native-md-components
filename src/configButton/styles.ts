import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const ConfigTitle = styled.Text`
  font-family: ${Fonts.primarySemiBold};
  font-size: 16px;
  color: ${Colors['titles']};
  margin-left: 10px;
  flex: 1;
`