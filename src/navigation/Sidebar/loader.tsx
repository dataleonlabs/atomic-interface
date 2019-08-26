import * as React from 'react'
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

const Loader = () => (
<ContentLoader 
  height={90}
  width={400}
  speed={2}
  primaryColor="#f3f3f3"
  secondaryColor="#ecebeb"
>
  <circle cx="70" cy="45" r="28" />
    <rect x="115" y="30" rx="3" ry="3" width="400" height="30" /> 
</ContentLoader>
)

export const StyledLoader = styled.div`
  padding: 0;
  width: 215px;
`;

export default Loader
