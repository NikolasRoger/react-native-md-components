import React from 'react';
import {Checkbox, MdBottomModal} from '..';

interface IProps {
  modalTitle?: string
  onSelect(selectedValue: any): void
  data: any
}

const SelectAddressModal = (props: IProps) => {
  return (
    <MdBottomModal modalTitle={props.modalTitle || "Selecionar endereço"}>
      <Checkbox
        mb="20px"
        items={props.data}
        onSelect={props.onSelect}
      />
    </MdBottomModal>
  );
};

export default SelectAddressModal;
