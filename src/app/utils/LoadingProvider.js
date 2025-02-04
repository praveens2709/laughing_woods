"use client";

import Loader from "@components/Loader";

const LoadingProvider = ({ isLoading, children }) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {isLoading && (
        <div className="loading-overlay">
          <Loader />
        </div>
      )}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LoadingProvider;
