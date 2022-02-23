import styled from 'styled-components/native';

type TProductImageContainer = {
  m?: string
}

export const Container = styled.TouchableOpacity`
  margin-right: 20px;
  width: 130px;
`;

export const ProductImageContainer = styled.View<TProductImageContainer>`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #eee;
  background-color: white;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: ${(props) => props.m || '0px'};
`;
