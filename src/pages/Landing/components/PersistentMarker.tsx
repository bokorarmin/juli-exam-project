import { useEffect, useRef, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

export const PersistentMarker = ({
  position,
  index,
  registerOpenPopup,
}: {
  position: [number, number];
  index: number;
  registerOpenPopup: (index: number) => void;
}) => {
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
        <video width="350" autoPlay loop playsInline>
          <source src="/videos/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Popup>
    </Marker>
  );
};
