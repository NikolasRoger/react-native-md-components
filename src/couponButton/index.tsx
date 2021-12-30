import React from "react";
import { Container, Text } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../config/colors";
import MdIcon from "../mdIcon";
import { View, Text as NText } from "react-native";
import pipes from '../helpers/pipes';
import Fonts from '../config/fonts';

interface IInfoData {
  id: number
  code: string
  name: string
  description: string
  starts_in: Date
  ends_in: Date
  minimum_value: number
  limit_per_user: number
  total_used: number
  total_discount: number
  marketplace: string
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
  size?: string;
}

const CouponButton = (props: IProps) => {
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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {item.showIcon && <MdIcon image="couponIcon" size="24px" />}
            <View style={{ flex: 1 }}>
              <Text size={props.size}>{`${item.name}`}</Text>
              {item?.infoData?.applied_on && <NText style={{ fontSize: 14, marginLeft: 10 }}>
                {item?.infoData?.applied_on === 'BY_DELIVERY' ? 'Desconto na entrega: ' : 'Desconto no subtotal: '}
                {item?.infoData?.type_discount === 'PERCENT' ? item.infoData.discount + '%' : pipes.formatMoney(item.infoData?.discount || 0)}
              </NText>}
              {/* {item.showIcon && item.infoData && (
                <Text style={styles.couponGenerate}>Gerado por: {item.infoData?.marketplace}</Text>
              )} */}

            </View>
            <Icon
              name="chevron-forward-outline"
              color={Colors["titles"]}
              size={28}
            />
          </View>
          {item.infoData?.marketplace && <View style={{
              flex: 1,
              alignSelf: 'flex-start',
              marginTop: 8,
              borderTopWidth: 1,
              borderColor: '#E4E4E4',
              paddingTop: 4,
              width: '100%'
            }}>
            <NText style={{ marginTop: 4, fontFamily: Fonts.primary }}>Gerado por: <NText style={{ fontFamily: Fonts.primary }}>{item?.infoData?.marketplace}</NText></NText>
          </View>}
        </Container>
      ))}
    </>
  );
};

export default CouponButton;
