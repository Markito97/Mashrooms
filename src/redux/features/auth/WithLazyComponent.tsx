import { Suspense } from "react";

export const withLazyLoadingComponent = (LazyComponent) => {
  return (props) => {
    return (
      <Suspense fallback={<></>}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};
