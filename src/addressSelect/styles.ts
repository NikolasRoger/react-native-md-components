import styled from 'styled-components/native';
import Fonts from '../config/fonts';

type TContainerProps = {
  m?: string
}

export const Container = styled.TouchableOpacity<TContainerProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.m || "0px"};
  margin-top: 10px;
`;

export const Address = styled.Text`
  font-family: ${Fonts.primarySemiBold};
  font-weight: 600;
  font-size: 16px;
  margin-left: 5px;
  margin-right: 5px;
`
