import styled from 'styled-components/native';

type TDotProps = {
  color: string
  height: string
  width: string
  m?: string
}

export const Container = styled.View`
  height: 80px;
  width: 100%;
  background-color: white;
  flex-direction: row;
`;

export const TabContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Dot = styled.View<TDotProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  border-radius: 50px;
  margin: ${(props) => props.m || '0px'}
`