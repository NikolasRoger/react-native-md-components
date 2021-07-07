import React from 'react';
import {Checkbox, MdBottomModal} from '..';

const SelectAddressModal = () => {
  return (
    <MdBottomModal modalTitle="Selecionar endereço">
      <Checkbox
        mb="20px"
        items={[
          {
            title:
              'R. Cícero Marques de Souza, 3315 - Novo Horizonte, Macapá - AP',
          },
          {
            title:
              'R. Cícero Marques de Souza, 3315 - Novo Horizonte, Macapá - AP',
          },
        ]}
      />
    </MdBottomModal>
  );
};

export default SelectAddressModal;
