import * as React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';
import { LoaderProps as Props } from './props';

const Loader = (props: Props) => (
  <ContentLoader
    height={90}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <circle cx="73" cy="45" r="28" />
    {props.iconOnly === false &&
      <rect className="rectBar" x="115" y="30" rx="3" ry="3" width="400" height="30" />
    }
  </ContentLoader>
)

export const StyledLoader = styled.div`
  padding: 0;
  width: 215px;
`;

export default Loader
