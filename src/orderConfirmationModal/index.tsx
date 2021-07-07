import React from 'react';
import {
  InfoContainer,
  InfoContent,
  InfoTitle,
  Message,
  ProgressBarContainer,
  TimeInfo,
  ProgressBar,
  WarningText,
} from './styles';
import {MdModal, Button} from '..';

interface IInfos {
  infoTitle: string;
  infoContent: string;
}

interface IProps {
  infos: IInfos[];
  time?: number;
}

const OrderConfirmationModal = (props: IProps) => {
  return (
    <MdModal modalTitle="Confirmar pedido">
      <Message>
        Aqui está um resumo do seu pedido antes de você finalizar:
      </Message>
      {props.infos.map((info, index) => (
        <InfoContainer key={index}>
          <InfoTitle>
            {info.infoTitle}: <InfoContent>{info.infoContent}</InfoContent>
          </InfoTitle>
        </InfoContainer>
      ))}
      <TimeInfo>
        Aguarde, seu pedido será confirmado em {props.time} segundos
      </TimeInfo>
      <ProgressBarContainer
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        }}>
        <ProgressBar />
      </ProgressBarContainer>
      <WarningText>
        Atenção: após a confirmação do pedido, não será possível cancelar o
        pedido.
      </WarningText>
      <Button type="white" titleColor="titles" title="Cancelar pedido" />
    </MdModal>
  );
};

export default OrderConfirmationModal;
