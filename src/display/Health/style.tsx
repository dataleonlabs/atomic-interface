
import styled from 'styled-components'
import { HealthProps as Props } from './props';

export const StyledHealth = styled.div<{ color: Props['color'], size: Props['size']}>`  
  span{    
    font-size: ${({ size }) => {
      /* istanbul ignore next */
      if (size === 'sm') /* istanbul ignore next */ {
        return '14px;'
      }
      /* istanbul ignore next */
      if (size === 'md') /* istanbul ignore next */ {
        return '18px;'
      }
      /* istanbul ignore next */
      if (size === 'lg') /* istanbul ignore next */ {
        return '24px;'
      }
      /* istanbul ignore next */
      if (size === 'xlg') /* istanbul ignore next */ {
        return '36px;'
      }
    }}    
  }
  svg{
      margin-bottom: ${({ size }) => {
        /* istanbul ignore next */
        if (size === 'sm') /* istanbul ignore next */ {
          return '3px;'
        }
        /* istanbul ignore next */
        if (size === 'md') /* istanbul ignore next */ {
          return '7px;'
        }
        /* istanbul ignore next */
        if (size === 'lg') /* istanbul ignore next */ {
          return '10px;'
        }
        /* istanbul ignore next */
        if (size === 'xlg') /* istanbul ignore next */ {
          return '16px;'
        }
      }}
      border-radius: 50%;
      background: ${({ color }) => {
        /* istanbul ignore next */
        if (color === 'failure') /* istanbul ignore next */ {
          return '#dc3545 !important;'
        }
        /* istanbul ignore next */
        if (color === 'unknown') /* istanbul ignore next */ {
          return '#98A2B3;'
        }
        /* istanbul ignore next */
        if (color === 'healthy') /* istanbul ignore next */ {
          return '#28a745 !important;'
        }
        /* istanbul ignore next */
        if (color === 'warning') /* istanbul ignore next */ {
          return '#F5A700;'
        }
        /* istanbul ignore next */
        if (color === 'info') /* istanbul ignore next */ {
          return '#007bff !important;'
        }
    }}
    height: ${({ size }) => {
      /* istanbul ignore next */
      if (size === 'sm') /* istanbul ignore next */ {
        return '8px;'
      }
      /* istanbul ignore next */
      if (size === 'md') /* istanbul ignore next */ {
        return '10px;'
      }
      /* istanbul ignore next */
      if (size === 'lg') /* istanbul ignore next */ {
        return '12px;'
      }
      /* istanbul ignore next */
      if (size === 'xlg') /* istanbul ignore next */ {
        return '14px;'
      }
    }}
    width: ${({ size }) => {
      /* istanbul ignore next */
      if (size === 'sm') /* istanbul ignore next */ {
        return '8px;'
      }
      /* istanbul ignore next */
      if (size === 'md') /* istanbul ignore next */ {
        return '10px;'
      }
      /* istanbul ignore next */
      if (size === 'lg') /* istanbul ignore next */ {
        return '12px;'
      }
      /* istanbul ignore next */
      if (size === 'xlg') /* istanbul ignore next */ {
        return '14px;'
      }
    }}
  }`;