import React from "react";

export default function GoogleMap() {
  return (
    <div className="map-container">
      <iframe
        src="https://maps.google.com/maps?q=26.23081954092404,73.05319216464636&z=14&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        title="Google Map"
      ></iframe>
    </div>
  );
}
