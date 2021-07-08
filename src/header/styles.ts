import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';

type TContentContainerProps = {
  m?: string
  pl?: string
}

export const Container = styled.View`
  background-color: ${Colors['secondary']};
  height: 130px;
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 30px;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const IconContainer = styled.TouchableOpacity`
  margin-right: 20px;
`

export const ContentContainer = styled.View<TContentContainerProps>`
  padding-left: ${(props) => props.pl || '70px'};
  flex-direction: column;
  flex: 1;
  margin-bottom: ${(props) => props.m || '0px'};
`

export const CategorieTitle = styled.Text`
  font-family: ${Fonts.primarySemiBold};
  font-size: 17px;
  letter-spacing: .4px;
  text-align: right;
  color: ${Colors['titles']};
  font-weight: bold;
`

export const CategorieDescription = styled.Text`
  font-family: ${Fonts.primary};
  font-size: 15px;
  text-align: right;
  color: ${Colors['titles']};
`