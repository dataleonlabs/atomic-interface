
import styled from 'styled-components'
import { SpacerProps as Props } from './props';

export const StyledSpacer = styled.div<{ size: Props['size'] }>`
  display: block;
  background: transparent;
  height: ${({ size }) => {
    /* istanbul ignore next */
      if (size === 'sm') /* istanbul ignore next */ {
        return '15px'
      }
      /* istanbul ignore next */
      if (size === 'md') /* istanbul ignore next */ {
        return '30px'
      }
      /* istanbul ignore next */
      if (size === 'lg') /* istanbul ignore next */ {
        return '60px'
      }
      /* istanbul ignore next */
      if (size === 'xlg') /* istanbul ignore next */ {
        return '100px'
      }
    }}
`;