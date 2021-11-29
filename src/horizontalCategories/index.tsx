import React from 'react';
import { FlatList } from 'react-native';
import Colors from '../config/colors';
import { Container, ImageBg, Categorie } from './styles';
import Icon from 'react-native-vector-icons/Fontisto';
import FastImage from 'react-native-fast-image';

interface IItem {
  title: string;
  image?: string;
  infoData?: any;
}

interface IProps {
  categorie: string;
  mr?: string;
  items: IItem[];
  onPress?(pressedItem: any): void
}

const HorizontalCategories = (props: IProps) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        width: '100%',
        marginTop: 20,
      }}
      contentContainerStyle={{
        paddingLeft: 30,
      }}
      keyExtractor={item => item.title}
      data={props.items}
      renderItem={({ item }) => (
        <Container
          mr={props.mr}
          onPress={() => props.onPress && props.onPress(item.infoData)}>
          <ImageBg
            color={Colors['bg']}
            style={{
              shadowColor: '#777',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}
          >
            {
              item.image ? (
                <FastImage
                  source={{ uri: item.image }}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              )
                : (
                  <Icon name="shopping-bag-1" size={34} style={{ color: '#D1D8DB' }} />
                )
            }
          </ImageBg>
          <Categorie>{item.title}</Categorie>
        </Container>
      )}>
    </FlatList>
  );
};

export default HorizontalCategories;
