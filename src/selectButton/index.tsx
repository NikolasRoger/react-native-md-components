import React from "react";
import { Container, Text } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../config/colors";
import MdIcon from "../mdIcon";

interface IItems {
  name: string;
  showIcon?: boolean;
  infoData?: any;
}

interface IProps {
  items: IItems[];
  onPress?(selectedItem: any): any;
}

const SelectButton = (props: IProps) => {
  return (
    <>
      {props.items.map((item, index) => (
        <Container
          onPress={() => props.onPress && props.onPress(item.infoData)}
          key={index}
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
          {item.showIcon && <MdIcon image="couponIcon" size="24px" />}
          <Text>{item.name}</Text>
          <Icon
            name="chevron-forward-outline"
            color={Colors["titles"]}
            size={28}
          />
        </Container>
      ))}
    </>
  );
};

export default SelectButton;
