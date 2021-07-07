import React from 'react';
import Colors, {TColors} from '../config/colors';
import {
  Container,
  StatusRow,
  IllustrationContainer,
  Illustration,
  Status,
  StatusContainer,
  InfoContent,
  InfoTitle,
  InfoContainer,
  Indicator,
  BadgeContainer,
  BadgeContent,
  MainContainer,
  EditIconContainer,
} from './styles';
import {MdIcon} from '../index';
import {Dot} from '../bottomTabBar/styles';

interface IInfos {
  infoTitle: string;
  infoContent?: string;
}

interface ICards {
  cardTitle: string;
  cardSubtitle: string;
  cardNumber: string;
}

interface IItems {
  cards?: ICards[];
  infos?: IInfos[];
  status?: string;
  image?: string;
  badgeBg?: TColors;
  badgeContent?: string;
  m?: string;
  showEditButton?: boolean;
  showIndicator?: boolean;
}

interface IProps {
  items: IItems[];
}

const images: any = {
  sendIllustration: require('../src/assets/images/login-illustration.png'),
  clockIllustration: require('../src/assets/images/clock-illustration.png'),
};

const Info = (props: IProps) => {
  return (
    <>
      {props.items.map((item, index) => (
        <MainContainer
          mb={item.showEditButton && item.badgeBg ? '15px' : undefined}>
          <Container
            m={item.m}
            key={index}
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            {item.image && (
              <StatusRow>
                <IllustrationContainer>
                  <Illustration source={images[item.image]} />
                </IllustrationContainer>
                <StatusContainer>
                  <Status>{item.status}</Status>
                </StatusContainer>
              </StatusRow>
            )}
            {item.infos &&
              item.infos.map((info, index) => (
                <InfoContainer key={index}>
                  <InfoTitle>
                    {info.infoTitle}
                    {info.infoContent ? ':' : ''}{' '}
                    <InfoContent>{info.infoContent}</InfoContent>
                  </InfoTitle>
                </InfoContainer>
              ))}
            {item.cards &&
              item.cards.map((card, index) => (
                <>
                  <InfoContainer key={index}>
                    <InfoTitle>{card.cardTitle}</InfoTitle>
                    <Dot
                      width="4px"
                      height="4px"
                      color={Colors['titles']}
                      m="0 5px"
                    />
                    <InfoTitle>{card.cardSubtitle}</InfoTitle>
                  </InfoContainer>
                  <InfoContent>{card.cardNumber}</InfoContent>
                </>
              ))}
            {item.showIndicator && (
              <Indicator>Clique no pedido para ver mais</Indicator>
            )}
          </Container>
          {item.badgeBg && (
            <BadgeContainer
              bottom={item.showEditButton && item.badgeBg ? '0' : '8'}
              bg={item.badgeBg}>
              <BadgeContent>{item.badgeContent}</BadgeContent>
            </BadgeContainer>
          )}
          {item.showEditButton && (
            <EditIconContainer
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
              }}>
              <MdIcon size="16px" image="pencilIcon" />
            </EditIconContainer>
          )}
        </MainContainer>
      ))}
    </>
  );
};

export default Info;
