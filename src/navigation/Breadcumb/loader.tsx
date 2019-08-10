import * as React from 'react'
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

const Loader = () => (
  <ContentLoader
    height={12}
    width={200}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="50" height="12" />
    <rect x="60" y="0" rx="0" ry="0" width="140" height="12" />
  </ContentLoader>
)

export const StyledLoader = styled.div`
  padding: 0;
  width: 200px;
`;


export default Loader
