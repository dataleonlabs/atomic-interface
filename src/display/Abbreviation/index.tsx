import * as React from 'react'
import Props from './props'
import { StyledAbbreviation } from './style'

export default function Abbreviation({ children }: Props) {
  let one = '';
  let two = '';
  const words = children.split(' ');
  one = words.length > 1 ? words[0] : children[0];
  two = words.length > 1 ? words[1] : children[1];

  return (
    <StyledAbbreviation title={children}>
      {`${(one || '').charAt(0).toUpperCase()}${(two || '').charAt(0).toUpperCase()}`}
    </StyledAbbreviation>
  )
}