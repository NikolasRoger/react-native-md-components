import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors, { TColors } from '../config/colors';
import { CategorieTitle, CategorieDescription, IconContainer } from '../header/styles';
import {
  Container,
  Illustration,
  Logo,
  Subtitle,
  Title,
  ContentContainer,
  TitleContainer,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

interface IProps {
  textColor?: TColors;
  subtextColor?: TColors;
  title?: string;
  subtitle?: string;
  m?: string;
  mb?: string;
  showLogo?: boolean;
  categorieTitle?: string;
  categorieDescription?: string;
  image: string;
  showBackButton?: boolean;
}

const images: any = {
  loginIllustration: require('../assets/login-illustration.png'),
  faqIllustration: require('../assets/faq-illustration.png'),
  serviceIllustration: require('../assets/service-illustration.png'),
};

const Banner = (props: IProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <Container>
      {props.showLogo ? (
        <Logo
          source={require('../assets/logo-mercado-delivery.png')}
        />
      ) : (
        <ContentContainer>
          {props.showBackButton && (
            <IconContainer onPress={() => navigation.pop()}>
              <Icon
                name="arrow-back-outline"
                color={Colors['titles']}
                size={36}
              />
            </IconContainer>
          )}
          <TitleContainer>
            <CategorieTitle>
              {props.categorieTitle?.toUpperCase()}
            </CategorieTitle>
            <CategorieDescription>
              {props.categorieDescription}
            </CategorieDescription>
          </TitleContainer>
        </ContentContainer>
      )}
      {props.textColor && props.subtextColor && (
        <>
          <Title m={props.m} textColor={props.textColor}>
            {props.title?.toUpperCase()}
          </Title>
          <Subtitle mb={props.mb} subtextColor={props.subtextColor}>
            {props.subtitle}
          </Subtitle>
        </>
      )}

      <Illustration source={images[props.image]} />
    </Container>
  );
};

export default Banner;
