import React from 'react';
import {Text} from './styles';
import {MdModal, Button} from '..';
import {ScrollView} from 'react-native';

interface IProps {
  text: string;
}

const ServiceInfoModal = (props: IProps) => {
  return (
    <MdModal modalTitle="Conta Digital Astecas">
      <ScrollView style={{marginTop: 20, marginBottom: 30}}>
        <Text>{props.text}</Text>
      </ScrollView>
      <Button type="primary" title="Saiba mais sobre o Astecas" />
    </MdModal>
  );
};

export default ServiceInfoModal;
