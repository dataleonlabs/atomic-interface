import * as React from 'react'
import { ProfilProps as Props } from './props'
import { StyledImage } from './style'

export default function Profil(props: Props) {
  const { size, ...rest } = props;

  return (
    <StyledImage size={props.size}>
      <img {...rest} />
    </StyledImage>    
  )
}