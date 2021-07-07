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

const ProductDetailModal = () => {
  return (
    <MdBottomModal modalTitle="Detalhes do item" modalSubtitle="Lessy Modas">
      <ProductList
        disabled={true}
        mt="0px"
        items={[
          {
            productImage: 'boneFlores',
            liked: true,
            productName: 'Boné com flores',
            productDescription: 'Com aba reta e faixa regulável.',
            productPrice: 'R$ 80,00',
            displayIcon: true,
          },
        ]}
      />
      <Title color="titles" title="Adicionar ao carrinho" mb="20px" />
      <MainAddItemContainer>
        <AddItemContainer>
          <IconContainer>
            <Icon
              name="ios-add-circle-outline"
              color={Colors['titles']}
              size={34}
            />
          </IconContainer>
          <NumberContainer>
            <NumberOfItems>123</NumberOfItems>
          </NumberContainer>
          <IconContainer>
            <Icon
              name="ios-remove-circle-outline"
              color={Colors['titles']}
              size={34}
            />
          </IconContainer>
        </AddItemContainer>
        <Button type="primary" title="Adicionar" />
      </MainAddItemContainer>
    </MdBottomModal>
  );
};

export default ProductDetailModal;
