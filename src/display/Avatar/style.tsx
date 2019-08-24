
import styled from 'styled-components'
import { AvatarProps } from './props';

const sizeFunc = ({ size }: AvatarProps ) => {
/* istanbul ignore next  */ if (size === 'sm') /* istanbul ignore next  */ { return '40px' }
/* istanbul ignore next  */ if (size === 'lg') /* istanbul ignore next  */ { return '70px' }
  return `50px`;
};

export const StyledImage = styled.span<{ size: AvatarProps['size'] }>`
  width: ${sizeFunc};;
  height: ${sizeFunc};;
  display: inline-block;
  overflow: hidden;
  border-radius: ${sizeFunc};;
  border: solid 1px #F2F2F2;

  img {
    width: ${sizeFunc};
  }
`;