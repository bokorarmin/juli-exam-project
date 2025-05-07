import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position: [number, number] = [47.4979, 19.0702]; // Budapest

const tileLayers = [
  {
    name: 'CartoDB Positron',
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
  },
  {
    name: 'CartoDB Dark Matter',
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
  },
  {
    name: 'OpenStreetMap HOT',
    url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    attribution:
      '&copy; OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team',
  },
];

const App: React.FC = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {tileLayers.map((layer, index) => (
        <div
          key={index}
          style={{ marginBottom: '40px', width: '80%', maxWidth: '900px' }}
        >
          <h3 style={{ textAlign: 'center', margin: '10px 0' }}>
            {layer.name}
          </h3>
          <MapContainer
            center={position}
            zoom={14}
            style={{ height: '500px', width: '50vw' }}
          >
            <TileLayer url={layer.url} attribution={layer.attribution} />
            <Marker position={position}>
              <Popup>
                <video width="250" controls>
                  <source src="your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ))}
    </div>
  );
};

export default App;
