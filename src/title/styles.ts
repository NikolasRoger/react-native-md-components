import styled from "styled-components/native";
import Colors, { TColors } from "../config/colors";
import Fonts from "../config/fonts";

type TBaseTitleProps = {
  color: TColors
  m?: string
  mb?: string
}

export const BaseTitle = styled.Text<TBaseTitleProps>`
  font-size: 20px;
  font-family: ${Fonts.primarySemiBold};
  font-weight: 600;
  color: ${(props) => Colors[props.color]};
  margin-top: ${(props) => props.m || '0px'};
  margin-bottom: ${(props) => props.mb || '0px'};
  align-self: flex-start;
`;
