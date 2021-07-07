import React from 'react';
import {Container} from './styles';

interface IProps {
  size: string;
  image: string;
}

const images: any = {
  couponIcon: require('../assets/coupon.png'),
  pencilIcon: require('../assets/pencil.png'),
};

const MdIcon = (props: IProps) => {
  return <Container size={props.size} source={images[props.image]} />;
};

export default MdIcon;
