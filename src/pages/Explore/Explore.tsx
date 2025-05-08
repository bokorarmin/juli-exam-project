import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../../utils/leaflet.config.ts';

import { useMapStore } from '../../stores/useMapStore.ts';
import { markerPositions, startingMapPosition } from '../../utils/constants.ts';
import { tileLayers, type TileLayerType } from '../../utils/map-types.ts';

export const Explore = () => {
  const { currentMap, setMap } = useMapStore();

  const currentLayer = tileLayers.find(
    (layer: { name: TileLayerType }) => layer.name === currentMap
  );

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: 2,
          padding: '8px 12px',
          boxShadow: 3,
        }}
      >
        <Typography
          sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '8px' }}
        >
          Játéktér
        </Typography>
        <ButtonGroup
          variant="contained"
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
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
      </Box>
      <MapContainer
        center={startingMapPosition}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url={currentLayer?.map.url ?? ''}
          attribution={currentLayer?.map.attribution ?? ''}
        />
        {markerPositions.map((pos, index) => (
          <Marker position={pos} key={index}>
            <Popup>
              <video width="230" controls>
                <source src="/videos/video2.webm" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};
