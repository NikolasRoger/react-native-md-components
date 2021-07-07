import styled from 'styled-components/native';

type TContainerProps = {
  color: string
}

export const Container = styled.TouchableOpacity<TContainerProps>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  padding-top: 7px;
  padding-right: 7.7px;
  padding-bottom: 6.1px;
  padding-left: 8px;  
  justify-content: center;
  align-items: center;
`;

export const Coin =  styled.Image.attrs({
  resizeMode: "contain"
})`
  width: 100%;
  height: 100%;
`