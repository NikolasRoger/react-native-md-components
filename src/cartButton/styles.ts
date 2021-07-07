import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';

type TInfoProps = {
  ml?: string
}

export const Container = styled.TouchableOpacity`
  height: 68px;
  background-color: white;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const TabContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`

export const Info = styled.Text<TInfoProps>`
  font-family: ${Fonts.primarySemiBold};
  font-size: 16px;
  color: ${Colors['titles']};
  margin-left: ${(props) => props.ml || '15px'};
`