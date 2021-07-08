import React from "react";
import {
  Container,
  IconContainer,
  ContentContainer,
  CategorieTitle,
  CategorieDescription,
} from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";

interface IProps {
  title: string;
  description: string;
  displayGoBack: boolean;
  m?: string;
  pl?: string;
}

const Header = (props: IProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <Container>
      {props.displayGoBack && (
        <IconContainer onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color={Colors["titles"]} size={36} />
        </IconContainer>
      )}
      <ContentContainer m={props.m} pl={props.pl}>
        <CategorieTitle>{props.title.toUpperCase()}</CategorieTitle>
        <CategorieDescription>{props.description}</CategorieDescription>
      </ContentContainer>
    </Container>
  );
};

export default Header;
