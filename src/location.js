import React, { useState } from 'react';

function CoordinatesWidget() {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  // Function to get latitude and longitude
  function getLatitudeLongitude() {
    // Check if Geolocation is supported
    if (navigator.geolocation) {
      // Get current position
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Update component state with latitude and longitude
        setCoordinates({ latitude, longitude });
      }, (error) => {
        console.error('Error getting location:', error);
      });
    } else {
      console.error('Geolocation is not supported.');
    }
  }

  return (
    <div>
      <button onClick={getLatitudeLongitude}>Get Coordinates</button>
      <div>
        {coordinates.latitude && coordinates.longitude ? (
          <p>Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}</p>
        ) : (
            <p>Click the button to get coordinates.</p>
            )}
      </div>
    </div>
  );
}

export default CoordinatesWidget;
