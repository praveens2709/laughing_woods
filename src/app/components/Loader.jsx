'use client';

import React, { useEffect, useState } from 'react';
import '../styles/loader.scss';

const Loader = () => {
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMoving(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${isMoving ? 'moveToHeader' : 'shake'}`}>
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;
