
import styled from 'styled-components'
import { SpacerProps as Props } from './props';

export const StyledSpacer = styled.div<{ size: Props['size'] }>`
  display: block;
  background: transparent;
  height: ${({ size }) => {
      if (size === 'sm') {
        return '15px'
      }
      if (size === 'md') {
        return '30px'
      }
      if (size === 'lg') {
        return '60px'
      }
      if (size === 'xlg') {
        return '100px'
      }
    }}
`;