import * as React from 'react';
import {  View } from 'react-native';
import { Carousel, AddressSelect, HorizontalCategories } from 'react-native-md-components'

const data = [
  {
    id: 1,
    title: 'Serviços de Tecnologia'
  },
  {
    id: 2,
    title: 'Vestuário e Calçados'
  },
  {
    id: 3,
    title: 'Teste'
  },
  {
    id: 4,
    title: 'Teste'
  },
  {
    id: 5,
    title: 'Teste'
  },
  {
    id: 6,
    title: 'Teste'
  }
]

export default function App() {
  return (
    <View>
      <Carousel/>
      <AddressSelect address="Rua Odilardo Silva, 1951, Centro, Macapá"/>
      <HorizontalCategories items={data} categorie="Serviços"/>
    </View>
  );
}
// ${defaultAddress.street}, ${defaultAddress.number}, ${defaultAddress.neighborhood}, ${defaultAddress.city}
