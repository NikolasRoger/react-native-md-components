import React from 'react';
import {
  MainContainer,
  Container,
  BgImage,
  ItemsContainer,
  TextContainer,
  Title,
  Description,
  ImageContainer,
  Image,
} from './styles';

interface IItems {
  bg: string;
  title: string;
  description: string;
  illustration: string;
  alignIllustration: string;
  alignText: string;
  left: string;
}

interface IProps {
  items: IItems[];
}

const images: any = {
  purpleGradient: require('../src/assets/images/purple-gradient.png'),
  moneyIllustration: require('../src/assets/images/conta-astecas-illustration.png'),
  blueGradient: require('../src/assets/images/blue-gradient.png'),
  socialIllustration: require('../src/assets/images/social-illustration.png'),
};

const AdvertisingImage = (props: IProps) => {
  return (
    <>
      {props.items.map((item, index) => (
        <MainContainer key={index}>
          <Container>
            <BgImage source={images[item.bg]}>
              <ItemsContainer align={item.alignText}>
                <TextContainer>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                </TextContainer>
              </ItemsContainer>
            </BgImage>
          </Container>
          <ImageContainer left={item.left} align={item.alignIllustration}>
            <Image source={images[item.illustration]} />
          </ImageContainer>
        </MainContainer>
      ))}
    </>
  );
};

export default AdvertisingImage;
