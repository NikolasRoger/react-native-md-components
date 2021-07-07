import React from 'react';
import {
  Photo,
  Container,
  IconContainer,
  InfoContainer,
  InfoRow,
  EstablishmentName,
  StarsQuantity,
  EstablishmentServices,
} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Dot} from '../bottomTabBar/styles';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

interface IItem {
  content: string;
}

interface IProps {
  establishmentName: string;
  starsQuantity: number;
  items: IItem[];
}

const HeaderPhoto = (props: IProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <Container>
      <IconContainer onPress={() => navigation.pop()}>
        <Icon name="arrow-back-outline" color="white" size={36} />
      </IconContainer>
      <InfoContainer>
        <InfoRow>
          <EstablishmentName>
            {props.establishmentName.toUpperCase()}
          </EstablishmentName>
          <Dot color="white" height="5px" width="5px" m="0 5px" />
          <Icon name="star" color="#FFD41C" size={16} />
          <StarsQuantity>{props.starsQuantity}</StarsQuantity>
        </InfoRow>
        <InfoRow>
          {props.items.map((item, index) => (
            <InfoRow key={index}>
              <EstablishmentServices>{item.content}</EstablishmentServices>
              {index !== props.items.length - 1 && (
                <Dot color="white" height="5px" width="5px" m="0 5px" />
              )}
            </InfoRow>
          ))}
        </InfoRow>
      </InfoContainer>
      <Photo
        source={require('../assets/images/lessy-modas.jpg')}
        style={{tintColor: 'black'}}
      />
      <Photo
        source={require('../assets/images/lessy-modas.jpg')}
        style={{opacity: 0.5}}
      />
    </Container>
  );
};

export default HeaderPhoto;