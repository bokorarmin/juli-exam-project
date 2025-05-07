import { Button } from '@mui/material';
import { useMap } from 'react-leaflet';
import { useNavigate } from 'react-router';

import { routePaths } from '../../../utils/route-paths.ts';

interface CloseAllPopupsProps {
  onClose: () => void;
}

export const CloseAllPopups = ({ onClose }: CloseAllPopupsProps) => {
  const navigate = useNavigate();
  const map = useMap();

  const handleCloseAll = () => {
    map.eachLayer((layer) => {
      layer.closePopup();
    });
    onClose();
    navigate(routePaths.explore);
  };

  return (
    <Button
      variant="text"
      color="primary"
      sx={{
        position: 'absolute',
        top: 10,
        left: '50%',
        zIndex: 1000,
        transform: 'translateX(-50%)',
      }}
      onClick={handleCloseAll}
    >
      Bezárás
    </Button>
  );
};
