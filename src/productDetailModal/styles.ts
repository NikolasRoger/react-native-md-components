import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';

export const MainAddItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const AddItemContainer = styled.View`
  margin-right: 10px;
  flex-direction: row;
  align-items: center;
`

export const NumberContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: #E4E4E4;
  padding: 0 30px;
  margin: 0 10px;
`

export const NumberOfItems = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: ${Fonts.primarySemiBold};
  color: ${Colors.titles};
`

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`