import React, { useEffect, useState } from 'react';
import {
  InfoContainer,
  InfoContent,
  InfoTitle,
  Message,
/*   ProgressBarContainer, */
  TimeInfo,
/*   ProgressBar, */
  WarningText,
  BtnContainer,
} from './styles';
import { MdModal, Button } from '..';

interface IInfos {
  infoTitle: string;
  infoContent: string;
}

interface IProps {
  infos: IInfos[];
  maxTime?: number;
  visible: boolean
  onRequestClose(): void
  onTimeEnd(): void
}

const OrderConfirmationModal = (props: IProps) => {

  const [timer, setTimer] = useState(props.maxTime || 10)

  useEffect(() => {
    let t = setInterval(() => {
      verifyTimer()
    }, 1000)

    return () => { clearInterval(t) }
  }, [props.visible])

  useEffect(() => {
    if (timer === 0) {
      props.onTimeEnd()
    }
  }, [timer])

  function verifyTimer() {
    if (props.visible) {
      setTimer((old) => old - 1)
    } else {
      setTimer(props.maxTime || 10)
    }
  }

  return (
    <MdModal visible={props.visible} onRequestClose={props.onRequestClose} modalTitle="Confirmar pedido">
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
        Aguarde, seu pedido será confirmado em {timer} segundos
      </TimeInfo>
      {/* <ProgressBarContainer
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
      </ProgressBarContainer> */}
      <WarningText>
        Atenção: após a confirmação do pedido, não será possível cancelar o
        pedido.
      </WarningText>
      <BtnContainer>
        <Button type="white" titleColor="titles" title="Cancelar pedido" onPress={props.onRequestClose} />
      </BtnContainer>
    </MdModal>
  );
};

export default OrderConfirmationModal;
