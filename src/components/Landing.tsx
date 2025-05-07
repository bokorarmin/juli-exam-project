import { Button, ButtonGroup } from '@mui/material';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { useMapStore } from '../stores/useMapStore.ts';
import { tileLayers } from '../utils/map-types';

const position: [number, number] = [47.4979, 19.0702] as const;

export const Landing = () => {
  const { currentMap, setMap } = useMapStore();

  const currentLayer = tileLayers.find((layer) => layer.name === currentMap);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h2>Map Layer Selector</h2>
      <ButtonGroup variant="contained" style={{ marginBottom: '20px' }}>
        {tileLayers.map((layer) => (
          <Button
            key={layer.name}
            onClick={() => setMap(layer.name)}
            color={layer.name === currentMap ? 'primary' : 'inherit'}
          >
            {layer.name}
          </Button>
        ))}
      </ButtonGroup>

      <div style={{ width: '80%', maxWidth: '900px' }}>
        <MapContainer
          center={position}
          zoom={14}
          style={{ height: '500px', width: '50vw' }}
        >
          <TileLayer
            url={currentLayer?.map.url ?? ''}
            attribution={currentLayer?.map.attribution ?? ''}
          />
          <Marker position={position}>
            <Popup>
              <video width="250" controls>
                <source src="/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};
