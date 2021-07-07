import styled from 'styled-components/native';
import Fonts from '../config/fonts';

type TImageContainerProps = {
  align: string
  left: string
}

type TItemsContainerProps = {
  align: string
}

export const MainContainer = styled.TouchableOpacity`
  padding-top: 30px;
  margin-bottom: -114px;
  padding-bottom: 5px;
`

export const Container = styled.View`
  height: 100px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const BgImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
`

export const ItemsContainer = styled.View<TItemsContainerProps>`
  padding: 10px 5px;
  padding-left: 10px;
  flex-direction: row;
  justify-content: ${(props) => props.align};
`

export const TextContainer = styled.View`
  width: 54%;
`

export const Title = styled.Text`
  font-family: ${Fonts.primarySemiBold};
  font-size: 13px;
  color: white;
  margin-bottom: 5px;
`

export const Description = styled.Text`
  font-family: ${Fonts.primary};
  font-size: 12px;
  color: #D6D6E3;
`

export const ImageContainer = styled.View<TImageContainerProps>`
  width: 150px;
  height: 110px;
  position: relative;
  bottom: 115px;
  align-self: ${(props) => props.align};
  left: ${(props) => props.left};
`

export const Image = styled.Image.attrs({
  resizeMode: "contain"
})`
  width: 100%;
  height: 100%
`