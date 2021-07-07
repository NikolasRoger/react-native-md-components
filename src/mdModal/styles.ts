import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';

export const Container = styled.View`
  width: 100%;
  max-height: 80%;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
`;

export const ModalHeaderContainer = styled.View`
  flex-direction: row;
  align-content: center;
`

export const ModalTitleContainer = styled.View`
  flex: 1;
`

export const ModalTitle = styled.Text`
  font-family: ${Fonts.primarySemiBold};
  font-size: 20px;
  color: ${Colors.titles};
`

export const ModalSubtitle = styled.Text`
  font-family: ${Fonts.primary};
  font-size: 16px;
  color: ${Colors.text};
`

export const CloseIconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`