import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';

type TTitleContainerProps = {
  borderSize: string
}

export const Container = styled.View`
  
`;

export const TitleContainer = styled.TouchableOpacity<TTitleContainerProps>`
  flex: 1;
  border-bottom-width: ${(props) => props.borderSize};
  padding-right: 15px;
  padding-left: 15px;
`

export const TabTitle = styled.Text`
  text-align: center;
  font-family: ${Fonts.primarySemiBold};
  font-size: 20px;
  color: ${Colors['titles']};
`