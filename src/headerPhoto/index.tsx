import React from "react";
import {
  Photo,
  Container,
  IconContainer,
  InfoContainer,
  InfoRow,
  EstablishmentName,
  /* StarsQuantity, */
  EstablishmentServices,
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
// import { Dot } from "../bottomTabBar/styles";
// import { useNavigation } from "@react-navigation/native";
// import type { StackNavigationProp } from "@react-navigation/stack";

interface IItem {
  content: string;
}

interface IProps {
  displayBackIcon?: boolean;
  establishmentName: string;
  thumbnail: string;
  items: IItem[];
}

const HeaderPhoto = (props: IProps) => {
  // const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <Container>
      {/* {!props.displayBackIcon && (
        <IconContainer onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color="white" size={36} />
        </IconContainer>
      )} */}
      <InfoContainer>
        <InfoRow>
          <EstablishmentName numberOfLines={2}>
            {props.establishmentName.toUpperCase()}
          </EstablishmentName>
{/*        <Dot color="white" height="5px" width="5px" m="0 5px" />
          <Icon name="star" color="#FFD41C" size={16} />
          <StarsQuantity>{props.starsQuantity}</StarsQuantity> */}
        </InfoRow>
        <InfoRow>
          {/* {props.items.map((item, index) => ( */}
            <InfoRow>
              <EstablishmentServices numberOfLines={2}>{props.items[0].content} • {props.items[1].content}</EstablishmentServices>
              {/* {index !== props.items.length - 1 && (
                <Dot color="white" height="5px" width="5px" m="0 5px" />
              )} */}
            </InfoRow>
          {/* ))} */}
        </InfoRow>
      </InfoContainer>
      <Photo
        source={{uri: props.thumbnail}}
        style={{ tintColor: "black" }}
      />
      <Photo
        source={{uri: props.thumbnail}}
        style={{ opacity: 0.5 }}
      />
    </Container>
  );
};

export default HeaderPhoto;
