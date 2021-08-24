import React from 'react';
import Colors from '../config/colors';
import {Dot} from '../bottomTabBar/styles';
import {InfoContent} from '../info/styles';
import {
  Container,
  Text,
  Check,
  InsideCheck,
  InfosContainer,
  TitleContainer,
} from './styles';

interface IItems {
  title: string;
  subtitle?: string;
  content?: string;
  cardNumber?: string;
  checked?: boolean;
  infoData?: any;
}

interface IProps {
  items: IItems[];
  mb?: string;
  onSelect(selectedValue: any): void
}

const Checkbox = (props: IProps) => {
  return (
    <>
      {props.items.map((item, index) => (
        <Container key={index} mb={props.mb} onPress={() => props.onSelect(item.infoData)}>
          <InfosContainer>
            <TitleContainer>
              <Text>{item.title}</Text>
              {item.subtitle && (
                <>
                  <Dot
                    width="4px"
                    height="4px"
                    color={Colors['titles']}
                    m="0 5px"
                  />
                  <Text>{item.subtitle}</Text>
                </>
              )}
            </TitleContainer>
            {item.content && <InfoContent>{item.content}</InfoContent>}
          </InfosContainer>
          <Check>{item.checked && <InsideCheck />}</Check>
        </Container>
      ))}
    </>
  );
};

export default Checkbox;
