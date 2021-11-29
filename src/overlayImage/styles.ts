import styled from "styled-components/native";
import Fonts from '../config/fonts';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
`

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 10px;
`

export const ImageText = styled.Text`
  color: white;
  border-color: #fff;
  border-width: 1px;
  border-radius: 4px;
  font-family: ${Fonts.primarySemiBold};
  width: 80px;
  text-align: center;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 16px;
`
