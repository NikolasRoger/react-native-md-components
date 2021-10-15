import React from 'react';
import {ScrollView} from 'react-native';
import Colors from '../config/colors';
import {Container, ImageBg, Categorie, CategorieImage} from './styles';
import Icon from 'react-native-vector-icons/Fontisto'

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
        <Container
          mr={props.mr}
          onPress={() => props.onPress && props.onPress(item.infoData)}
          key={index}>
          <ImageBg
            color={Colors['bg']}
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
              {
                item.image ? (
                  <CategorieImage
                    source={{ uri: item.image }}
                  />
                )
                : (
                  <Icon name="shopping-bag-1" size={34} style={{color: '#D1D8DB'}}/>
                )
              }
          </ImageBg>
          <Categorie>{item.title}</Categorie>
        </Container>
      ))}
    </ScrollView>
  );
};

export default HorizontalCategories;
