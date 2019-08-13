import * as React from 'react'
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

const Loader = () => (
<ContentLoader 
  height={120}
  width={400}
  speed={2}
  primaryColor="#f3f3f3"
  secondaryColor="#ecebeb"
>
  <rect x="120" y="26" rx="4" ry="4" width="146" height="10" /> 
  <circle cx="84" cy="34" r="23" />
  
</ContentLoader>
)

export const StyledLoader = styled.div`
  padding: 0;
  width: 200px;
`;

export default Loader
