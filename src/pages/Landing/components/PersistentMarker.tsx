import { Box, Paper, Typography } from '@mui/material';
import L from 'leaflet';
import { useEffect, useRef } from 'react';
import { Marker, Popup } from 'react-leaflet';

import type { ExtendedMarker } from '../../../map-config/constants.ts';

interface PersistentMarkerProps {
  position: [number, number];
  index: number;
  video: string | undefined;
  streetName: string;
}

const customPinIcon = L.icon({
  iconUrl: '/pin.png',
  iconSize: [10, 45],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export const PersistentMarker = ({
  position,
  video,
  streetName,
}: PersistentMarkerProps) => {
  const markerRef = useRef<ExtendedMarker | null>(null);

  useEffect(() => {
    const marker = markerRef.current;

    if (marker) {
      marker.on('popupopen', () => {
        if (marker._icon) {
          marker._icon.style.display = 'none';
        }

        const popup = marker.getPopup();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const videoEl = popup.getElement()?.querySelector('video');
        if (videoEl) {
          videoEl.load();
          videoEl.play();
        }
      });

      marker.on('popupclose', () => {
        if (marker._icon) {
          marker._icon.style.display = '';
        }

        const popup = marker.getPopup();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const videoEl = popup.getElement()?.querySelector('video');
        if (videoEl) {
          videoEl.pause();
          videoEl.currentTime = 0;
        }
      });
    }
  }, []);

  return (
    <Marker ref={markerRef} position={position} icon={customPinIcon}>
      <Popup
        autoClose={false}
        closeButton={true}
        closeOnClick={false}
        closeOnEscapeKey={false}
        className="custom-popup"
      >
        <Paper elevation={0} sx={{ width: 270, overflow: 'hidden' }}>
          <Box>
            <video
              width={270}
              autoPlay
              loop
              playsInline
              style={{ display: 'block' }}
            >
              <source src={video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Box py={1} sx={{ bgcolor: 'background.paper', textAlign: 'center' }}>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontSize: '1rem' }}
            >
              {streetName}
            </Typography>
          </Box>
        </Paper>
      </Popup>
    </Marker>
  );
};
