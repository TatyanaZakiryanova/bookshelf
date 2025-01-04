import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={345}
    height={440}
    viewBox="0 0 272 385"
    backgroundColor="rgba(216, 216, 216, 0.5)"
    foregroundColor="white"
  >
    <rect x="10" y="4" rx="8" ry="8" width="101" height="145" />
    <rect x="10" y="155" rx="8" ry="8" width="101" height="33" />
    <rect x="35" y="192" rx="8" ry="8" width="42" height="14" />
  </ContentLoader>
);

export default Skeleton;
