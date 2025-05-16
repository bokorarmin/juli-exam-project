import { useEffect, useRef } from 'react';
import { Marker, Popup } from 'react-leaflet';

import type { ExtendedMarker } from '../../../map-config/constants.ts';

interface PersistentMarkerProps {
  position: [number, number];
  index: number;
  registerOpenPopup: (index: number) => void;
  video: string | undefined;
}

export const PersistentMarker = ({
  position,
  index,
  registerOpenPopup,
}: PersistentMarkerProps) => {
  const markerRef = useRef<ExtendedMarker | null>(null);

  useEffect(() => {
    const marker = markerRef.current;

    if (marker) {
      marker.on('popupopen', () => {
        if (marker._icon) {
          marker._icon.style.display = 'none';
        }
      });

      marker.on('popupclose', () => {
        if (marker._icon) {
          marker._icon.style.display = '';
        }
      });
    }
  }, []);

  const handleMarkerClick = () => {
    registerOpenPopup(index);
  };

  return (
    <Marker
      ref={markerRef}
      position={position}
      eventHandlers={{
        click: handleMarkerClick,
      }}
    >
      <Popup
        autoClose={false}
        closeButton={false}
        closeOnClick={false}
        closeOnEscapeKey={false}
        className="custom-popup"
      >
        <video width="220" autoPlay loop playsInline>
          <source src="/videos/video2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </Popup>
    </Marker>
  );
};
