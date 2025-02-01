'use client';

import Loader from '@components/Loader';

export default function LoadingProvider({ isLoading, children }) {
  return (
    <>
      {isLoading && <Loader />}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        {children}
      </div>
    </>
  );
}
