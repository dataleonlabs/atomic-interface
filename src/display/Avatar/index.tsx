import * as React from 'react'
import { AvatarProps as Props } from './props'
import { StyledImage } from './style'

export default function Avatar(props: Props) {
  const { size, ...rest } = props;

  return (
    <StyledImage size={props.size}>
      <img {...rest} />
    </StyledImage>    
  )
}