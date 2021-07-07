import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';

type TContainerProps = {
  mb?: string
}

export const Container = styled.TouchableOpacity<TContainerProps>`
  background-color: white;
  border-radius: 10px;
  border-color: ${Colors['titles']};
  border-width: 2px;
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.mb || '15px'};
`;

export const Text = styled.Text`
  color: ${Colors['titles']};
  font-family: ${Fonts.primary};
  font-size: 18px;
`
export const Check = styled.View`
  width: 24px;
  height: 24px;
  padding: 4px;
  border-width: 2px;
  border-color: ${Colors.titles};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`

export const InsideCheck = styled.View`
  width: 16px;
  height: 16px;
  background-color: ${Colors.titles};
  border-radius: 50px;
`

export const InfosContainer = styled.View`
  flex: 1;
`

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`