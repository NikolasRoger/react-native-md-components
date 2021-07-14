import styled from 'styled-components/native';
import Colors, {TColors} from '../config/colors'
import Fonts from '../config/fonts';

type TButtonProps = {
    type: TColors,
    m?: string,
    ml?: string,
    mr?: string,
    borderWidth?: string
    borderColor?: TColors
}

type TTitleProps = {
    titleColor: TColors
}

export const Container = styled.TouchableOpacity<TButtonProps>`
    background-color: ${(props) => Colors[props.type]} ;
    max-height: 50px;
    width: 100%;
    flex: 1;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: ${(props) => props.m || "0px"};
    margin-left: ${(props) => props.ml || '0px'};
    margin-right: ${(props) => props.mr || '0px'};
    border-width: ${(props) => props.borderWidth || '0px'};
    border-color: ${(props) => props.borderColor ? Colors[props.borderColor] : Colors['clear']};
`

export const Title = styled.Text<TTitleProps>`
    color: ${(props) => Colors[props.titleColor]};
    font-size: 16px;
    font-weight: 600;
    font-family: ${Fonts.primarySemiBold};
    font-weight: 600;
`