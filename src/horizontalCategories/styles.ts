import styled from 'styled-components/native';
import Fonts from '../config/fonts';
import Colors from "../config/colors";

type TContainerProps = {
  mr?: string
}

type TImageBgProps = {
  color?: string
}


export const Container = styled.TouchableOpacity<TContainerProps>`
  justify-content: flex-start;
  align-items: center;
  margin-right: ${(props) => props.mr || '0px'};
  margin-right: 20px;
`;

export const ImageBg = styled.View<TImageBgProps>`
  justify-content: center;
  align-items: center;
  height: 96px;
  width: 96px;
  /* margin-right: 8px; */
  background-color: ${(props) => props.color};
  border-radius: 10px;
  padding-top: 10px;
  padding-right: 11px;
  padding-bottom: 10px;
  padding-left: 13px;
`

export const Categorie = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.primarySemiBold};
  letter-spacing: .5px;
  font-weight: 600;
  text-align: center;
  color: ${Colors.titles};
  margin-top: 10px;
  width: 100%;
  max-width: 100px;
`

export const CategorieImage = styled.Image.attrs({
  resizeMode: "contain"
})`
  width: 100%;
  height: 100%;
`
