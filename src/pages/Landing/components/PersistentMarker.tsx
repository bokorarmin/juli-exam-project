import { useEffect, useRef, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

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
  const markerRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (markerRef.current && isPopupOpen) {
      const marker = markerRef.current;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      marker.off('click');

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      marker.on('click', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        marker.openPopup();
      });

      registerOpenPopup(index);
    }
  }, [isPopupOpen, index, registerOpenPopup]);

  const handleMarkerClick = () => {
    setIsPopupOpen(true);
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
        <video width="230" autoPlay loop playsInline>
          <source src="/videos/video2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </Popup>
    </Marker>
  );
};
