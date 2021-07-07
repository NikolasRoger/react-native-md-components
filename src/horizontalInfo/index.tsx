import React from 'react';
import {Container, Info, InfoValue} from './styles';

interface IItems {
  title: string;
  value: string;
}

interface IProps {
  items: IItems[];
}

const HorizontalInfo = (props: IProps) => {
  return (
    <>
      {props.items.map((item, index) => (
        <Container key={index}>
          <Info>{item.title}:</Info>
          <InfoValue>{item.value}</InfoValue>
        </Container>
      ))}
    </>
  );
};

export default HorizontalInfo;
