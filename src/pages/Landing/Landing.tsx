import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Box, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../../utils/leaflet.config.ts';
import { useMapStore } from '../../stores/useMapStore.ts';
import { markerPositions } from '../../utils/constants.ts';
import { tileLayers } from '../../utils/map-types.ts';

import { CloseAllPopups } from './components/CloseAllPopups.tsx';
import { PersistentMarker } from './components/PersistentMarker.tsx';
import { PopupController } from './components/PopupController.tsx';

const position: [number, number] = [47.4979, 19.0702] as const;

export const Landing = () => {
  const { currentMap } = useMapStore();
  const [openPopups, setOpenPopups] = useState<Set<number>>(new Set());
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentLayer = tileLayers.find((layer) => layer.name === currentMap);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleFullscreenToggle = () => {
    const mapContainer = document.getElementById('map-wrapper');
    if (!mapContainer) return;

    if (!document.fullscreenElement) {
      mapContainer.requestFullscreen().catch((err) => console.error(err));
    } else {
      document.exitFullscreen().catch((err) => console.error(err));
    }
  };

  return (
    <Box id="map-wrapper" width="100vw" height="100vh" position="relative">
      <MapContainer
        center={position}
        zoom={15.4}
        style={{ height: '110vh', width: '100vw' }}
      >
        <TileLayer
          url={currentLayer?.map.url ?? ''}
          attribution={currentLayer?.map.attribution ?? ''}
        />

        <PopupController openPopups={openPopups} setOpenPopups={setOpenPopups}>
          {markerPositions.map((pos, index) => (
            <PersistentMarker
              key={index}
              position={pos}
              index={index}
              registerOpenPopup={() => {}}
            />
          ))}
        </PopupController>

        {openPopups.size === markerPositions.length && (
          <CloseAllPopups onClose={() => setOpenPopups(new Set())} />
        )}
      </MapContainer>

      {!isFullscreen && (
        <IconButton
          onClick={handleFullscreenToggle}
          sx={{
            zIndex: 1000,
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: 'white',
            '&:hover': { backgroundColor: '#f0f0f0' },
            boxShadow: 3,
          }}
        >
          <FullscreenIcon />
        </IconButton>
      )}
    </Box>
  );
};
