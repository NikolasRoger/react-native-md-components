import styled from 'styled-components/native';
import Colors from '../config/colors';
import Fonts from '../config/fonts';

type TProductTextProps = {
  font?: string
  color?: string
  size?: string
}

type TContainerProps = {
  mt?: string
}

export const Container  = styled.View<TContainerProps>`
  margin-top: ${(props) => props.mt || '20px'};
  align-content: center;
`

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
`;

export const ImageContainer = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`

export const ProductImage = styled.Image.attrs({
  resizeMode: "cover"
})`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const LikeContainer  = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  left: -5px;
  top: -8px;
`

export const InfoContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-between;
  flex: 1;
  align-content: center;
`

export const ProductText = styled.Text<TProductTextProps>`
  font-family: ${(props) => props.font || Fonts['primarySemiBold']};
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || Colors['titles']};
`

export const ArrowIconContainer = styled.TouchableOpacity`
  padding-left: 15px;
`