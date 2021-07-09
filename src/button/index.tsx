import React from "react";
import type { TColors } from "../config/colors";
import { Container, Title } from "./styles";

interface IProps {
  type: TColors;
  titleColor?: TColors;
  m?: string;
  onPress?(): any;
  title: string;
  borderWidth?: string;
  borderColor?: string;
}

const Button = (props: IProps) => {
  return (
    <Container
      borderColor={props.borderColor}
      borderWidth={props.borderWidth}
      onPress={props.onPress}
      m={props.m}
      type={props.type}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <Title titleColor={props.titleColor || "white"}>
        {props.title.toUpperCase()}
      </Title>
    </Container>
  );
};

export default Button;
