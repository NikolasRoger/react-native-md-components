import React from 'react';
import {
  AddItemContainer,
  IconContainer,
  MainAddItemContainer,
  NumberContainer,
  NumberOfItems,
} from './styles';
import {MdBottomModal, ProductList, Title, Button} from '..';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../config/colors';

interface IProps {
  visible: boolean
  onRequestClose(): void
  onFinish(pressedItem: any): void
  onPressAdd(pressedItem: any): void
  onPressRemove(pressedItem: any): void
  qtd: number
  productImage: string
  productName: string
  productDescription: string
  productPrice: string
  establishment: string
  infoData?: any
}

const ProductDetailModal = (props: IProps) => {
  return (
    <MdBottomModal 
      modalTitle="Detalhes do item" 
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      modalSubtitle={props.establishment}
    >
      <ProductList
        disabled={true}
        mt="0px"
        items={[
          {
            productImage: props.productImage,
            liked: true,
            productName: props.productName,
            productDescription: props.productDescription,
            productPrice: props.productPrice,
            displayIcon: false,
          }
        ]}
      />
      <Title color="titles" title="Adicionar ao carrinho" mb="20px" />
      <MainAddItemContainer>
        <AddItemContainer>
          <IconContainer onPress={() => props.onPressAdd(props.infoData)}>
            <Icon
              name="ios-add-circle-outline"
              color={Colors['titles']}
              size={34}
            />
          </IconContainer>
          <NumberContainer>
            <NumberOfItems>{props.qtd}</NumberOfItems>
          </NumberContainer>
          <IconContainer onPress={() => props.onPressRemove(props.infoData)}>
            <Icon
              name="ios-remove-circle-outline"
              color={Colors['titles']}
              size={34}
            />
          </IconContainer>
        </AddItemContainer>
        <Button type="primary" title="Adicionar" onPress={() => props.onFinish(props.infoData)} />
      </MainAddItemContainer>
    </MdBottomModal>
  );
};

export default ProductDetailModal;
