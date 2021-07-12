import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../config/colors";
import { ConfigTitle, Container } from "./styles";

interface IProps {
  icon?: string;
  title: string;
  RightComponent: any;
}

const ConfigButton = (props: IProps) => {
  return (
    <Container
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
      {props.icon && (
        <Icon name={props.icon} color={Colors["titles"]} size={24} />
      )}
      <ConfigTitle>{props.title}</ConfigTitle>
      {props.RightComponent}
    </Container>
  );
};

export default ConfigButton;
