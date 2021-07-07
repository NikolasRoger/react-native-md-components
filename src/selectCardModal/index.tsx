import React from 'react';
import {MdBottomModal, Checkbox} from '..';

const SelectCardModal = () => {
  return (
    <MdBottomModal modalTitle="Selecionar Cartão">
      <Checkbox
        mb="20px"
        items={[
          {
            title: 'Mastercard',
            subtitle: 'Cartão de débito',
            content: '•••• 0001',
          },
          {
            title: 'Mastercard',
            subtitle: 'Cartão de crédito',
            content: '•••• 0001',
          },
        ]}
      />
    </MdBottomModal>
  );
};

export default SelectCardModal;
