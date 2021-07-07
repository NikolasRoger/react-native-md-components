import styled from 'styled-components/native';

type TContainerProps = {
  size: string
}

export const Container = styled.Image.attrs({
  resizeMode: "contain"
})<TContainerProps>`
  width: ${(props) => props.size || '0px'};
  height: ${(props) => props.size || '0px'};
`;

