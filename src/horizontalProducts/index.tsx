import React from 'react';
import Colors from '../config/colors';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Container, ProductImageContainer, ProductImage} from './styles';
import {
  Name,
  InfoContainer,
  DataContainer,
  Info,
  DotSeparator,
} from '../horizontalEstablishment/styles';

interface IItem {
  title: string;
  image: string;
  heartCount: number;
  time: string;
  value: string;
  establishment: string;
}

interface IProps {
  items: IItem[];
}

const images: any = {
  panqueca: require('../src/assets/images/panqueca.jpg'),
  saladaFrutas: require('../src/assets/images/salada-frutas.jpg'),
  sopaAbobora: require('../src/assets/images/sopa-abobora.jpg'),
};

const HorizontalProducts = (props: IProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        width: '100%',
        marginTop: 20,
      }}
      contentContainerStyle={{
        paddingLeft: 30,
      }}>
      {props.items.map((item, index) => (
        <Container key={index}>
          <ProductImageContainer
            m="10px"
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}>
            <ProductImage source={images[item.image]} />
          </ProductImageContainer>
          <Name textColor={Colors['titles']}>{item.title}</Name>
          <InfoContainer mt="5px" dataColor={Colors['secondaryTitle']}>
            <DataContainer>
              <Icon
                name="ios-heart-outline"
                color={Colors['secondaryTitle']}
                size={17}
                style={{
                  marginRight: 5,
                }}
              />
              <Info mr="10px">{item.heartCount}</Info>
              <DotSeparator />
            </DataContainer>
            <DataContainer>
              <Info mr="10px">{item.value}</Info>
            </DataContainer>
            <DataContainer>
              <DotSeparator />
              <Info mr="10px" mt="2px">
                {item.establishment}
              </Info>
            </DataContainer>
          </InfoContainer>
        </Container>
      ))}
    </ScrollView>
  );
};

export default HorizontalProducts;
