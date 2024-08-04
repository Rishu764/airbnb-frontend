import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap: React.FC = () => {
  const position: [number, number] = [31.576003, 77.247705]; 

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Where you'll be</h2>
      <div className="mb-4" style={{ height: '400px', width: '100%' }}>
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Sainj, Himachal Pradesh, India
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <p className="font-semibold mt-4">Sainj, Himachal Pradesh, India</p>
      <p className="text-gray-700">
        Our cottages are beautifully placed among the cedar/deodar trees with
        a mesmerizing panoramic view of the Great Himalayan National Park. We
        are just 500 meters from the Deohari bus stand and strategically close
        to all the tourist destinations like Rupi Raila Waterfall, Shangarh
        Meadow, Raila Twin Towers, and Pundrik Lake.
      </p>
    </div>
  );
};

export default LocationMap;
