
import styled from 'styled-components'
import { TitleProps as titleProps } from './props';
import { BodyTextProps as bodyProps } from './props';
import { Container } from 'reactstrap';

export const StyledTitle = styled.div<{ size: titleProps['size'] }>`
  text-align:center;  
  font-size: ${({ size }) => {
    /* istanbul ignore next */
    if (size === 'xsmall') /* istanbul ignore next */ {
        return '14px'
      }
    /* istanbul ignore next */
    if (size === 'small') /* istanbul ignore next */ {
        return '18px'
      }
    /* istanbul ignore next */
    if (size === 'medium') /* istanbul ignore next */ {
        return '24px'
      }
    /* istanbul ignore next */
    if (size === 'large') /* istanbul ignore next */ {
        return '36px'
      }
    /* istanbul ignore next */
    if (size === 'xlarge') /* istanbul ignore next */ {
        return '48px';
    }
    }
  }
`;

export const StyledIcon = styled.div`
  text-align:center;
`;

export const StyledBody = styled.div<{ size: bodyProps['size'] }>`  
  font-size: ${({ size }) => {
  /* istanbul ignore next */
    if (size === 'xsmall') /* istanbul ignore next */ {
      return '12px'
    }
  /* istanbul ignore next */
    if (size === 'small') /* istanbul ignore next */ {
      return '16px'
    }
  /* istanbul ignore next */
    if (size === 'medium') /* istanbul ignore next */ {
      return '18px'
    }
  /* istanbul ignore next */
    if (size === 'large') /* istanbul ignore next */ {
      return '24px'
    }
  /* istanbul ignore next */
    if (size === 'xlarge') /* istanbul ignore next */ {
      return '36px'
    }
  }}
  p{
    font-size: ${({ size }) => {
    /* istanbul ignore next */
    if (size === 'xsmall') /* istanbul ignore next */ {
      return '12px'
    }
  /* istanbul ignore next */
    if (size === 'small') /* istanbul ignore next */ {
      return '16px'
    }
  /* istanbul ignore next */
    if (size === 'medium') /* istanbul ignore next */ {
      return '18px'
    }
  /* istanbul ignore next */
    if (size === 'large') /* istanbul ignore next */ {
      return '24px'
    }
  /* istanbul ignore next */
    if (size === 'xlarge') /* istanbul ignore next */ {
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