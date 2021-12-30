import React from 'react';
import Colors from '../config/colors';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, ProductImageContainer } from './styles';
import FastImage from 'react-native-fast-image';
import {
  Name,
  InfoContainer,
  DataContainer,
  Info,
  DotSeparator,
} from '../horizontalEstablishment/styles';

const productWithoutImage = require('../assets/sem-imagem.webp');

interface IItem {
  title: string;
  image?: string;
  heartCount?: number;
  value: string;
  establishment: string;
  infoData?: any;
}

interface IProps {
  items: IItem[];
  onPress?(pressedItem: any): any;
}

const HorizontalProducts = (props: IProps) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        width: '100%',
        marginTop: 20,
      }}
      contentContainerStyle={{
        paddingLeft: 24,
      }}
      keyExtractor={item => item.infoData.id}
      data={props.items}
      renderItem={({ item }) => (
        <Container onPress={() => props.onPress && props.onPress(item.infoData)}>
          <ProductImageContainer
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              backgroundColor: "white",
              elevation: 4,
            }}>
            <FastImage
              source={item.image ? { uri: item.image } : productWithoutImage}
              resizeMode="cover"
              style={{ width: '100%', height: '100%' }}
            />
          </ProductImageContainer>
          <Name textColor={Colors['titles']} numberOfLines={1}>{item.title}</Name>
          <InfoContainer mt="5px" dataColor={Colors['secondaryTitle']}>
            {
              item.heartCount && (
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
              )
            }
            <DataContainer>
              <Info mr="10px">{item.value}</Info>
            </DataContainer>
            <DataContainer>
              {/* <DotSeparator /> */}
              <Info numberOfLines={2} mr="10px" mt="2px">
                {item.establishment}
              </Info>
            </DataContainer>
          </InfoContainer>
        </Container>
      )}
    >
    </FlatList>
  );
};

export default HorizontalProducts;
