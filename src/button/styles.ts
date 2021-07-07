import styled from 'styled-components/native';
import Colors, {TColors} from '../config/colors'
import Fonts from '../config/fonts';

type TButtonProps = {
    type: TColors,
    m?: string
}

type TTitleProps = {
    titleColor: TColors
}

export const Container = styled.TouchableOpacity<TButtonProps>`
    background-color: ${(props) => Colors[props.type]} ;
    height: 50px;
    width: 100%;
    flex: 1;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: ${(props) => props.m || "0px"};
`

export const Title = styled.Text<TTitleProps>`
    color: ${(props) => Colors[props.titleColor]};
    font-size: 16px;
    font-weight: 600;
    font-family: ${Fonts.primarySemiBold};
    font-weight: 600;
`