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
    <React.Fragment>
      {props.items.map((item, index) => (
        item ? (
        <Container key={index}>
          <Info>{item?.title}:</Info>
          <InfoValue>{item?.value}</InfoValue>
        </Container>
      ) : ( null )))}
    </React.Fragment>
  );
};

export default HorizontalInfo;
