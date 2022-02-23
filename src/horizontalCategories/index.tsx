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
        paddingLeft: 24,
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
              shadowColor: '#999',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.20,
              shadowRadius: 1.41,
              elevation: 2,
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
