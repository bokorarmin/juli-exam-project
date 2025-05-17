import { Box } from '@mui/material';
import { useState, useMemo } from 'react';

const IMAGE_COUNT = 40;
const RADIUS_X = 600;
const RADIUS_Y = 400;
const CENTER_VIDEO_WIDTH = 600;
const CENTER_VIDEO_HEIGHT = 360;
const N = 4; // superellipse exponent

export const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Signed power helper
  const spow = (base: number, exp: number) =>
    Math.sign(base) * Math.pow(Math.abs(base), exp);

  // Generate a dense sample of angles and their points along superellipse
  const { positions } = useMemo(() => {
    const samples = 1000;
    const points: { x: number; y: number; angle: number }[] = [];

    for (let i = 0; i <= samples; i++) {
      const angle = (2 * Math.PI * i) / samples - Math.PI / 2;
      const x = RADIUS_X * spow(Math.cos(angle), 2 / N);
      const y = RADIUS_Y * spow(Math.sin(angle), 2 / N);
      points.push({ x, y, angle });
    }

    // Calculate cumulative arc length between points
    const arcLengths = [0];
    for (let i = 1; i < points.length; i++) {
      const dx = points[i].x - points[i - 1].x;
      const dy = points[i].y - points[i - 1].y;
      arcLengths.push(arcLengths[i - 1] + Math.sqrt(dx * dx + dy * dy));
    }

    const totalLength = arcLengths[arcLengths.length - 1];

    // For each desired equally spaced arc length, find the corresponding angle by linear interpolation
    const positions = Array.from({ length: IMAGE_COUNT }).map((_, i) => {
      const targetLength = (i * totalLength) / IMAGE_COUNT;

      // Binary search to find segment
      let low = 0,
        high = arcLengths.length - 1;
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arcLengths[mid] < targetLength) low = mid + 1;
        else high = mid;
      }

      const idx = Math.max(low - 1, 0);

      const lengthBefore = arcLengths[idx];
      const lengthAfter = arcLengths[idx + 1];
      const segmentLength = lengthAfter - lengthBefore;
      const t =
        segmentLength === 0 ? 0 : (targetLength - lengthBefore) / segmentLength;

      const x = points[idx].x + t * (points[idx + 1].x - points[idx].x);
      const y = points[idx].y + t * (points[idx + 1].y - points[idx].y);

      return { x, y };
    });

    return { positions };
  }, []);

  return (
    <Box>
      {positions.map(({ x, y }, i) => {
        const isSelected = i === selectedIndex;
        return (
          <Box
            key={i}
            component="img"
            src={`https://picsum.photos/seed/${i}/120/90`}
            alt={`Image ${i}`}
            onClick={() => setSelectedIndex(i)}
            sx={{
              position: 'absolute',
              width: isSelected ? 150 : 150,
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
              filter:
                selectedIndex !== null && !isSelected
                  ? 'blur(2px) brightness(0.5)'
                  : 'none',
              transition: 'filter 0.3s ease',
              zIndex: isSelected ? 5 : 1,
              borderRadius: 0,
              boxShadow: isSelected ? '0 0 15px #fff' : 'none',
            }}
          />
        );
      })}

      {selectedIndex !== null && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: CENTER_VIDEO_WIDTH,
            height: CENTER_VIDEO_HEIGHT,
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            boxShadow: '0 0 30px rgba(255,255,255,0.8)',
            borderRadius: 4,
            overflow: 'hidden',
            bgcolor: '#000',
          }}
        >
          <video
            key={selectedIndex}
            src={'/videos/istvan_u_10.webm'}
            controls
            autoPlay
            style={{ width: '100%', height: '100%', display: 'block' }}
            onClick={(e) => e.stopPropagation()}
          />
          <Box
            component="button"
            onClick={() => setSelectedIndex(null)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: 'rgba(0,0,0,0.5)',
              border: 'none',
              color: '#fff',
              borderRadius: '50%',
              width: 30,
              height: 30,
              cursor: 'pointer',
              fontSize: 20,
              lineHeight: '30px',
              textAlign: 'center',
            }}
          >
            ×
          </Box>
        </Box>
      )}
    </Box>
  );
};
