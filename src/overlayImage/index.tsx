import React from 'react'
import { Container, ImageContainer, ImageText } from './styles'

interface IOverlayImage {
  name?: string
}

export default function OverlayImage({ name='Fechado' }: IOverlayImage) {
  return (
    <Container>
      <ImageContainer>
        <ImageText>{name}</ImageText>
      </ImageContainer>
    </Container>
  )
}
