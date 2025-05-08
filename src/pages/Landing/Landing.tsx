import { Box } from '@mui/material';
import { useState } from 'react';
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

  const currentLayer = tileLayers.find((layer) => layer.name === currentMap);

  console.log(openPopups);
  console.log(markerPositions.length);
  return (
    <Box width={'100vw'} height={'100vh'} position="relative">
      <MapContainer
        center={position}
        zoom={15.4}
        style={{ height: '100%', width: '100%' }}
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
    </Box>
  );
};
