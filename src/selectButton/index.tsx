import React from "react";
import { Container, Text } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../config/colors";
import MdIcon from "../mdIcon";

interface IInfoData {
  id: number
  code: string
  name: string
  description: string
  starts_in: Date
  ends_in: Date
  minimum_value: number
  limits_per_user: number
  total_used: number
  total_discount: number
  applied_on: "BY_CART" | "BY_DELIVERY"
  status: "PENDING" | "ACTIVE" | "CANCELED" | "FINISHED"
  created_at: Date
  updated_at: Date
  discount: number
  type_discount: "VALUE" | "PERCENT"
  created_by: number
  updated_by: number
  marketplace_id: number
  limit: number
  limit_total_value: number
}

interface IItems {
  name: string;
  showIcon?: boolean;
  infoData?: IInfoData;
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
          <Text>{`${item.name} ${item?.infoData?.name ? '- '+ item.infoData.name : ''}`}</Text>
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
