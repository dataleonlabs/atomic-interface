
import React from 'react';
import ContentLoader from 'react-content-loader'

const Loader = () => (
  <ContentLoader
    height={300}
    width={500}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="10" rx="0" ry="0" width="163" height="15" />
    <rect x="0" y="40" rx="0" ry="0" width="163" height="15" />
    <rect x="0" y="70" rx="0" ry="0" width="163" height="15" />
    <rect x="0" y="100" rx="0" ry="0" width="163" height="15" />
    <rect x="0" y="130" rx="0" ry="0" width="163" height="15" />

    <rect x="193" y="10" rx="0" ry="0" width="163" height="15" />
    <rect x="193" y="40" rx="0" ry="0" width="163" height="15" />
    <rect x="193" y="70" rx="0" ry="0" width="163" height="15" />
    <rect x="193" y="100" rx="0" ry="0" width="163" height="15" />
    <rect x="193" y="130" rx="0" ry="0" width="163" height="15" />

    <rect x="386" y="10" rx="0" ry="0" width="163" height="15" />
    <rect x="386" y="40" rx="0" ry="0" width="163" height="15" />
    <rect x="386" y="70" rx="0" ry="0" width="163" height="15" />
    <rect x="386" y="100" rx="0" ry="0" width="163" height="15" />
    <rect x="386" y="130" rx="0" ry="0" width="163" height="15" />
  </ContentLoader>
)

export default Loader