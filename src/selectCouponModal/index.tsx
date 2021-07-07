import React from 'react';
import {MdBottomModal, Checkbox} from '..';

const SelectCouponModal = () => {
  return (
    <MdBottomModal modalTitle="Selecionar cupom">
      <Checkbox
        items={[
          {
            title: 'Cupom de R$ 10,00',
            content: 'Validade: 23/06',
          },
        ]}
      />
    </MdBottomModal>
  );
};

export default SelectCouponModal;
