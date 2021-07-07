import styled from 'styled-components/native';

type TProductImageContainer = {
  m?: string
}

export const Container = styled.View`
  margin-right: 20px;
  width: 130px;
`;

export const ProductImageContainer = styled.View<TProductImageContainer>`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: ${(props) => props.m || '0px'};
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: "cover"
})`
  width: 100%;
  height: 100%;
`;