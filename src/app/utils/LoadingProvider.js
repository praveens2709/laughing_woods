'use client';

import { useEffect, useState } from 'react';
import Loader from '@components/Loader';

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) {
    return null;
  }

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
