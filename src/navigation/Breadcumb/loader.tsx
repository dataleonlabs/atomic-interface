import * as React from 'react'
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

const Loader = () => (
  <ContentLoader
    height={3}
    width={200}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="10" height="3" />
    <rect x="12" y="0" rx="0" ry="0" width="30" height="3" />
  </ContentLoader>
)

export const StyledLoader = styled.div`
  padding: .75rem 1rem;
  padding-left: 0;
  padding-right: 0;
`;


export default Loader
