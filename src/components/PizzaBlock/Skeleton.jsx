import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={330}
    viewBox="0 0 400 500"
    backgroundColor="#fafafa"
    foregroundColor="#ededed"
    {...props}
  >
    <circle cx="138" cy="138" r="138" />
    <rect x="0" y="289" rx="0" ry="0" width="276" height="38" />
    <rect x="0" y="340" rx="0" ry="0" width="276" height="111" />
  </ContentLoader>
);

export default Skeleton;
