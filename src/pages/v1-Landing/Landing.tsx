import FullscreenIcon from '@mui/icons-material/Fullscreen';
import {
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../map-config/leaflet.config.ts';
import { useNavigate } from 'react-router';

import { markers } from '../../map-config/constants.ts';
import { tileLayers } from '../../map-config/map-types.ts';
import { routePaths } from '../../router/paths.ts';
import { useMapStore } from '../../stores/useMapStore.ts';

import { CloseAllPopups } from './components/CloseAllPopups.tsx';
import { PersistentMarker } from './components/PersistentMarker.tsx';
import { PopupController } from './components/PopupController.tsx';

const position: [number, number] = [47.4979, 19.0702] as const;

export const Landing = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
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
    <Box
      id="map-wrapper"
      width="100vw"
      height="100vh"
      position="relative"
      overflow="hidden"
    >
      <Button
        variant={'contained'}
        onClick={() => navigate(routePaths.explanation)}
      >
        Wright Block Archive
      </Button>
      <MapContainer
        center={position}
        zoom={16}
        style={{ height: '110vh', width: '100vw' }}
      >
        <TileLayer
          url={currentLayer?.map.url ?? ''}
          attribution={currentLayer?.map.attribution ?? ''}
          className="nighttime-satellite"
        />

        <PopupController openPopups={openPopups} setOpenPopups={setOpenPopups}>
          {markers.map((marker, index) => (
            <PersistentMarker
              key={index}
              position={marker.position}
              index={index}
              video={marker.video}
              registerOpenPopup={(index: number) => {
                setOpenPopups((prev) => {
                  const newSet = new Set(prev);
                  newSet.add(index);

                  return newSet;
                });
              }}
            />
          ))}
        </PopupController>

        {openPopups.size === markers.length && (
          <CloseAllPopups onClose={() => setOpenPopups(new Set())} />
        )}
      </MapContainer>

      {!isFullscreen && isDesktop && (
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
