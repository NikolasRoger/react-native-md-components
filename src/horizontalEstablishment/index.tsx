import React from 'react';
import Colors from '../config/colors';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  EstablishmentImage,
  EstablishmentImageContainer,
  Name,
  DataContainer,
  InfoContainer,
  Info,
  DotSeparator,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

interface IItem {
  title: string;
  image: string;
  starCount: number;
  time: string;
  value: string;
}

interface IProps {
  title: string;
  items: IItem[];
}

const images: any = {
  espacoCafeBistro: require('../src/assets/images/espaco-cafe-bistro.jpg'),
  barBoemia: require('../src/assets/images/bar-boemia.jpg'),
  lessyModas: require('../src/assets/images/lessy-modas.jpg'),
};

const HorizontalEstablishment = (props: IProps) => {
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
      {props.items.map((item, index) => (
        <Container
          mr="20px"
          onPress={() => navigation.push('Establishment')}
          key={index}>
          <EstablishmentImageContainer
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
            <EstablishmentImage source={images[item.image]} />
          </EstablishmentImageContainer>
          <Name textColor={Colors['titles']}>{item.title}</Name>
          <InfoContainer mt="5px" dataColor={Colors['secondaryTitle']}>
            <DataContainer>
              <Icon
                name={'ios-star-outline'}
                color={Colors['secondaryTitle']}
                size={16}
                style={{
                  marginRight: 5,
                }}
              />
              <Info mr="10px">{item.starCount}</Info>
              <DotSeparator />
            </DataContainer>
            <DataContainer>
              <Icon
                name={'ios-time-outline'}
                color={Colors['secondaryTitle']}
                size={17}
                style={{
                  marginRight: 5,
                }}
              />
              <Info mr="10px">{item.time}</Info>
              <DotSeparator />
            </DataContainer>
            <DataContainer>
              <Info mr="10px">{item.value}</Info>
            </DataContainer>
          </InfoContainer>
        </Container>
      ))}
    </ScrollView>
  );
};

export default HorizontalEstablishment;
