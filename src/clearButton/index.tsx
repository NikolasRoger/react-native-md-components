import React from "react";
import type { TColors } from "../config/colors";
import { Container, Text } from "./styles";

interface IProps {
  m?: string;
  text1: string;
  text2: string;
  textColor1?: TColors;
  textColor2?: TColors;
  onPress?(): void;
}

const ClearButton = (props: IProps) => {
  return (
    <Container m={props.m} onPress={props.onPress}>
      <Text textColor={props.textColor1 || "titles"}>{props.text1} </Text>
      <Text
        style={{ textDecorationLine: "underline" }}
        textColor={props.textColor2 || "primary"}
      >
        {props.text2}
      </Text>
    </Container>
  );
};

export default ClearButton;
