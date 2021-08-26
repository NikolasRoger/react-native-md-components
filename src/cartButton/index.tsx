import React from 'react';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {TabContainer, Info} from './styles';
import Colors from '../config/colors';
import {Dot} from '../bottomTabBar/styles';

interface IProps {
  itemsQuantity: number;
  cartTotal: string;
  onPress?(): void;
}

const CartButton = (props: IProps) => {

  return (
    <Container
      onPress={() => props.onPress && props.onPress()}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
      }}>
      <TabContainer>
        <Icon name="cart" size={30} color={Colors['titles']} />
        <Info>{props.itemsQuantity} itens no carrinho</Info>
        <Dot color={Colors['titles']} height="5px" width="5px" m="0 5px" />
        <Info ml="0px">{props.cartTotal}</Info>
      </TabContainer>
      <Icon name="chevron-forward-outline" color={Colors['titles']} size={36} />
    </Container>
  );
};
export default CartButton;
