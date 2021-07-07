import styled from 'styled-components/native';
import Fonts from '../config/fonts';

type TContainerProps = {
  mr?: string
}

type TEstablishmentImageContainerProps = {
  m?: string
}

type TNameProps = {
  textColor: string
}

type TInfoContainerProps = {
  mt?: string
  dataColor: string
}

type TInfoProps = {
  mr?: string
  mt?: string
}

export const Container = styled.TouchableOpacity<TContainerProps>`
  margin-right: ${(props) => props.mr || '0px'};
`;

export const EstablishmentImageContainer = styled.View<TEstablishmentImageContainerProps>`
  width: 200px;
  height: 130px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: ${(props) => props.m || '0px'};
`;

export const EstablishmentImage = styled.Image.attrs({
  resizeMode: "cover"
})`
  width: 100%;
  height: 100%;
`;

export const Name = styled.Text<TNameProps>`
  color: ${(props) => props.textColor};
  font-size: 16px;
  font-family: ${Fonts.primarySemiBold};
  font-weight: 600;
`;

export const InfoContainer = styled.View<TInfoContainerProps>`
  margin-top: ${(props) => props.mt || '0px'};
  width: 100%;
  flex-direction: row;
  color: ${(props) => props.dataColor};
  flex-wrap: wrap;
`

export const DataContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Info = styled.Text<TInfoProps>`
  font-family: ${Fonts.primary};
  font-size: 14px;
  margin-right: ${(props) => props.mr || '0px'};
  margin-top: ${(props) => props.mt || '0px'}
`

export const DotSeparator = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 50px;
  background-color: #3E3E3E;
  margin-right: 10px;
`