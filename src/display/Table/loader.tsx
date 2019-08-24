
import React from 'react';
import ContentLoader from 'react-content-loader'

const Loader = () => (
  <ContentLoader
    height={70}
    width={500}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="10" rx="0" ry="0" width="163" height="10" />
    <rect x="0" y="30" rx="0" ry="0" width="163" height="10" />
    <rect x="0" y="50" rx="0" ry="0" width="163" height="10" />

    <rect x="193" y="10" rx="0" ry="0" width="163" height="10" />
    <rect x="193" y="30" rx="0" ry="0" width="163" height="10" />
    <rect x="193" y="50" rx="0" ry="0" width="163" height="10" />

    <rect x="386" y="10" rx="0" ry="0" width="163" height="10" />
    <rect x="386" y="30" rx="0" ry="0" width="163" height="10" />
    <rect x="386" y="50" rx="0" ry="0" width="163" height="10" />
  </ContentLoader>
)

export default Loader