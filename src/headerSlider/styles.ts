import styled, { css } from 'styled-components/native';

import {
  Dimensions
} from 'react-native';
import Fonts from '../config/fonts';
import Colors from '../config/colors';

const {width: windowWidth} = Dimensions.get('window');

type TFlatListProps = {
  bg: string
}

type TPaginationDotProps = {
  isActive: boolean
}

type TSlideTitleProps = {
  titleColor: string
}

type TSlideSubtitleProps = {
  subtitleColor: string
}

export const Container = styled.View`
  height: 350px;
  width: 100%;
  margin-bottom: 20px;
`

export const List = styled.FlatList<TFlatListProps>`
  flex: 1;
  background-color: ${(props) => props.bg};
  overflow: hidden;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  height: 100%;
`;

export const SlideContainer = styled.View`
  padding: 30px;
  height: 100%;
  width: ${windowWidth}px;
  justify-content: center;
  align-items: center;
`

export const SlideImage = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: ${windowWidth}px;
  height: auto;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`

export const SlidePagination  = styled.View`
  position: absolute;
  bottom: 18px;
  width: 100%;
  justify-content: center;
  flex-direction: row;
`

export const PaginationDot = styled.View<TPaginationDotProps>`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  margin-left: 2px;
  margin-right: 2px;
  ${(props) => {
    if (props.isActive) {
      return css`
      background-color:#0F1011;
      `
    } else {
      return css`
        background-color:#0F1011;
        opacity: .5;
      `
    }
  }}
`

export const SlideTitle = styled.Text<TSlideTitleProps>`
  font-family: ${Fonts.primarySemiBold};
  font-size: 17px;
  letter-spacing: .4px;
  color: ${Colors['titles']};
  font-weight: bold;
  align-self: flex-end;
`

export const SlideSubtitle = styled.Text<TSlideSubtitleProps>`
  font-family: ${Fonts.primary};
  font-size: 14px;
  color: ${(props) => props.subtitleColor};
  align-self: flex-end;
  text-align: right;
  width: 60%;
`
