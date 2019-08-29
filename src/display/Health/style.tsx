
import styled from 'styled-components'
import { HealthProps as Props } from './props';

export const StyledHealth = styled.div<{ color: Props['color'], size: Props['size']}>`  
  span{    
    font-size: ${({ size }) => {
      if (size === 'sm') {
        return '14px;'
      }
      if (size === 'md') {
        return '18px;'
      }
      if (size === 'lg') {
        return '24px;'
      }
      if (size === 'xlg') {
        return '36px;'
      }
    }}    
  }
  svg{
      margin-bottom: ${({ size }) => {
        if (size === 'sm') {
          return '3px;'
        }
        if (size === 'md') {
          return '7px;'
        }
        if (size === 'lg') {
          return '10px;'
        }
        if (size === 'xlg') {
          return '16px;'
        }
      }}
      border-radius: 50%;
      background: ${({ color }) => {
        if (color === 'failure') {
          return '#dc3545 !important;'
        }
        if (color === 'unknown') {
          return '#98A2B3;'
        }
        if (color === 'healthy') {
          return '#28a745 !important;'
        }
        if (color === 'warning') {
          return '#F5A700;'
        }
        if (color === 'info') {
          return '#007bff !important;'
        }
    }}
    height: ${({ size }) => {
      if (size === 'sm') {
        return '8px;'
      }
      if (size === 'md') {
        return '10px;'
      }
      if (size === 'lg') {
        return '12px;'
      }
      if (size === 'xlg') {
        return '14px;'
      }
    }}
    width: ${({ size }) => {
      if (size === 'sm') {
        return '8px;'
      }
      if (size === 'md') {
        return '10px;'
      }
      if (size === 'lg') {
        return '12px;'
      }
      if (size === 'xlg') {
        return '14px;'
      }
    }}
  }`;