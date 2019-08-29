
import styled from 'styled-components'
import { TitleProps as titleProps } from './props';
import { BodyTextProps as bodyProps } from './props';
import { Container } from 'reactstrap';

export const StyledTitle = styled.div<{ size: titleProps['size'] }>`
  text-align:center;  
  font-size: ${({ size }) => {
    if (size === 'xsmall') {
      return '14px'
    }
    if (size === 'small') {
      return '18px'
    }
    if (size === 'medium') {
      return '24px'
    }
    if (size === 'large') {
      return '36px'
    }
    if (size === 'xlarge') {
      return '48px'
    }
  }}
`;

export const StyledIcon = styled.div`
  text-align:center;
`;

export const StyledBody = styled.div<{ size: bodyProps['size'] }>`  
  font-size: ${({ size }) => {
    if (size === 'xsmall') {
      return '12px'
    }
    if (size === 'small') {
      return '16px'
    }
    if (size === 'medium') {
      return '18px'
    }
    if (size === 'large') {
      return '24px'
    }
    if (size === 'xlarge') {
      return '36px'
    }
  }}
  p{
    font-size: ${({ size }) => {
    if (size === 'xsmall') {
      return '12px'
    }
    if (size === 'small') {
      return '16px'
    }
    if (size === 'medium') {
      return '18px'
    }
    if (size === 'large') {
      return '24px'
    }
    if (size === 'xlarge') {
      return '36px'
    }
  }}
  }`;

export const StyledActionPanel = styled.div`
  text-align:center;`;

export const StyledEmptyPrompts = styled.div`
  text-align:center;  
  background-color: #f1f1f1;
  padding-top: 20px;
  padding-bottom: 20px;  
  margin-top: auto;
  margin-bottom: auto;
  `;
export const StyledContainer = styled(Container)`
  background-color: #f1f1f1;
  height: 100vh;
`;