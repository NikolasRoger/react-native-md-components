import React from 'react';
import {ScrollView} from 'react-native';
import Colors from '../config/colors';
import {Container, ImageBg, Categorie} from './styles';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

interface IItem {
  title: string;
  image: string;
}

interface IProps {
  categorie: string;
  mr?: string;
  items: IItem[];
}

const HorizontalCategories = (props: IProps) => {
  const navigation =
    useNavigation<StackNavigationProp<any, 'HomeTabs'>>();
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
      <Container mr={props.mr} onPress={() => navigation.push('Service')}>
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
          {/*Inserir aqui CategorieImage*/}
        </ImageBg>
        <Categorie>Serviços</Categorie>
      </Container>
      {props.items.map((item, index) => (
        <Container
          mr={props.mr}
          onPress={() => navigation.push('Categorie')}
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
            {/*Inserir aqui CategorieImage*/}
          </ImageBg>
          <Categorie>{item.title}</Categorie>
        </Container>
      ))}
    </ScrollView>
  );
};

export default HorizontalCategories;
