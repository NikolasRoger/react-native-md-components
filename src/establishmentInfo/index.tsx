import React from 'react';
import Colors, {TColors} from '../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  TimeContainer,
  Address,
  TagContainer,
  TagContent,
  Time
} from './styles';
import {Dot} from '../bottomTabBar/styles';

interface IProps {
  address: string;
  tagBg: TColors;
  tagTextColor: TColors;
  tagContent: string;
  timeContent: string;
}

const EstablishmentInfo = (props: IProps) => {
  return (
    <Container>
      <Address>{props.address}</Address>
      <Dot color={Colors['text']} height="5px" width="5px" m="0 5px" />
      <TagContainer tagBg={props.tagBg}>
        <TagContent tagTextColor={props.tagTextColor}>
          {props.tagContent}
        </TagContent>
      </TagContainer>
      <Dot color={Colors['text']} height="5px" width="5px" m="0 5px" />
      <TimeContainer>
        <Icon name="ios-time-outline" color={Colors['titles']} size={18}></Icon>
        <Time>{props.timeContent}</Time>
      </TimeContainer>
    </Container>
  );
};

export default EstablishmentInfo;
