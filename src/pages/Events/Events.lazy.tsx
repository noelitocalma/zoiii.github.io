import React, { lazy, Suspense } from 'react';

const LazyEvents = lazy(() => import('./Events'));

const Events = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyEvents {...props} />
  </Suspense>
);

export default Events;
