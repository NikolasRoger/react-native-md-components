import React from 'react';
import {
  Container,
  ModalTitle,
  ModalHeaderContainer,
  ModalTitleContainer,
  ModalSubtitle,
  CloseIconContainer,
  ChildrenContainer,
} from './styles';
import {Modal, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../config/colors';

interface IProps {
  modalTitle: string;
  modalSubtitle?: string;
  onRequestClose?(): void;
  children?: any;
  visible?: boolean;
}

const MdBottomModal = (props: IProps) => {
  return (
    <Modal transparent visible={props.visible} onRequestClose={props.onRequestClose}>
      <View
        style={{
          backgroundColor: 'rgba(15, 16, 17, 0.6)',
          width: '100%',
          height: '100%',
        }}>
        <Container>
          <ModalHeaderContainer>
            <ModalTitleContainer>
              <ModalTitle>{props.modalTitle}</ModalTitle>
              {props.modalSubtitle && (
                <ModalSubtitle>{props.modalSubtitle}</ModalSubtitle>
              )}
            </ModalTitleContainer>
            <CloseIconContainer onPress={props.onRequestClose}>
              <Icon name="close" color={Colors['titles']} size={32} />
            </CloseIconContainer>
          </ModalHeaderContainer>
          <ChildrenContainer>
          {props.children}
          </ChildrenContainer>
        </Container>
      </View>
    </Modal>
  );
};

export default MdBottomModal;
