import styled from 'styled-components/native';
import Colors, { TColors } from '../config/colors';
import Fonts from '../config/fonts';

type TTitleProps = {
  textColor: TColors
  m?: string
}

type TSubtitleProps = {
  subtextColor: TColors
  mb?: string
}

export const Container = styled.View`
  width: 100%;
  background-color: #FFF3E3;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 30px;
  padding-bottom: 20px;
  align-items: center;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
`

export const TitleContainer = styled.View`
  flex: 1;
  margin-bottom: 20px;
`

export const Logo = styled.Image.attrs({
  resizeMode: "contain"
})`
  width: 100%;
  height: 64px;
`

export const Title = styled.Text<TTitleProps>`
  font-size: 18px;
  color: ${(props) => Colors[props.textColor]};
  font-weight: 600;
  text-align: center;
  margin-top: ${(props) => props.m || "0px"};
  font-family: ${Fonts.primarySemiBold};
  font-weight: 600;
`

export const Subtitle = styled.Text<TSubtitleProps>`
  font-size: 16px;
  color: ${(props) => Colors[props.subtextColor]};
  font-weight: 400;
  margin-bottom: ${(props) => props.mb || "0px"};
  text-align: center;
  font-family: ${Fonts.primary};
`

export const Illustration = styled.Image.attrs({
  resizeMode: "contain"
})`
  width: 100%;
  height: 210px;
`
