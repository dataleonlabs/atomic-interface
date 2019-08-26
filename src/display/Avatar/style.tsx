
import styled from 'styled-components'
import { AvatarProps } from './props';

const sizeFunc = ({ size }: AvatarProps ) => {
  if (size === 'sm') { return '40px' }
  if (size === 'lg') { return '70px' }
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