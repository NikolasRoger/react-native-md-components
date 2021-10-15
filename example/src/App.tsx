import * as React from 'react';
import {  View, Text } from 'react-native';
import { HorizontalCategories } from 'react-native-md-components'

const categories = [
  {
    title: 'teste'
  }
]

export default function App() {

  return (
    <View>
      <Text>Result</Text>
      <HorizontalCategories items={categories} categorie="Teste"/>
    </View>
  );
}
