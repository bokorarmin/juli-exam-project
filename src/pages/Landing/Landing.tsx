import { Box, Button } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import '../../map-config/leaflet.config.ts';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useNavigate } from 'react-router';

import { markers, startingMapPosition } from '../../map-config/constants.ts';
import { tileLayers, type TileLayerType } from '../../map-config/map-types.ts';
import { routePaths } from '../../router/paths.ts';
import { useMapStore } from '../../stores/useMapStore.ts';

import { PersistentMarker } from './components/PersistentMarker.tsx';
import { PopupController } from './components/PopupController.tsx';

export const Landing = () => {
  const { currentMap } = useMapStore();
  const navigate = useNavigate();

  const currentLayer = tileLayers.find(
    (layer: { name: TileLayerType }) => layer.name === currentMap
  );

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100vw',
        height: '115vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 2, zIndex: 1000 }}>
        <Button onClick={() => navigate(routePaths.explanation)}>
          THE BRIGHT BLOCK ARCHIVE
        </Button>
      </Box>

      <Box sx={{ flex: 1 }}>
        <MapContainer
          center={startingMapPosition}
          zoom={16}
          style={{ height: '100%', width: '100vw' }}
        >
          <TileLayer
            url={currentLayer?.map.url ?? ''}
            attribution={currentLayer?.map.attribution ?? ''}
            className="nighttime-satellite"
          />

          <PopupController>
            {markers.map((marker, index) => (
              <PersistentMarker
                key={index}
                position={marker.position}
                index={index}
                video={marker.video}
                streetName={marker.streetName}
              />
            ))}
          </PopupController>
        </MapContainer>
      </Box>
    </Box>
  );
};
