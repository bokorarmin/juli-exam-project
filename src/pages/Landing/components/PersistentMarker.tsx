import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { Marker, Popup } from 'react-leaflet';

import type { ExtendedMarker } from '../../../map-config/constants.ts';

interface PersistentMarkerProps {
  position: [number, number];
  index: number;
  video: string | undefined;
  streetName: string; // Added street name prop
}

export const PersistentMarker = ({
  position,
  video,
  streetName, // Receive street name
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
          videoEl.load(); // Reload video so it starts fresh
          videoEl.play(); // Ensure playback
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
          videoEl.pause(); // Stop video when closed
          videoEl.currentTime = 0; // Reset time to beginning
        }
      });
    }
  }, []);

  return (
    <Marker ref={markerRef} position={position}>
      <Popup
        autoClose={false}
        closeButton={true}
        closeOnClick={false}
        closeOnEscapeKey={false}
        className="custom-popup"
      >
        <Paper elevation={0} sx={{ width: 250, overflow: 'hidden' }}>
          {/*<Box*/}
          {/*  sx={{*/}
          {/*    bgcolor: 'primary.main',*/}
          {/*    color: 'primary.contrastText',*/}
          {/*    p: 1,*/}
          {/*    display: 'flex',*/}
          {/*    alignItems: 'center',*/}
          {/*    gap: 1,*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <LocationOnIcon fontSize="small" />*/}
          {/*  <Typography variant="subtitle2" fontWeight="medium">*/}
          {/*    {streetName}*/}
          {/*  </Typography>*/}
          {/*</Box>*/}
          <Box>
            <video
              width={250}
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
