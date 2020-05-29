import React, { lazy, Suspense } from 'react';

const LazyWorkExperience = lazy(() => import('./WorkExperience'));

const WorkExperience = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWorkExperience {...props} />
  </Suspense>
);

export default WorkExperience;
