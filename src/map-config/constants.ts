import { Marker as LeafletMarker } from 'leaflet';

export const markers: {
  position: [number, number];
  video: string;
  streetName: string;
}[] = [
  {
    position: [47.5032, 19.0733],
    video: '/videos/istvan_u_10.webm',
    streetName: 'István utca 10',
  },
  {
    position: [47.5044, 19.0758],
    video: '/videos/istvan_u_28.webm',
    streetName: 'István utca 28',
  },
] as const;

const getCenterPosition = (
  markers: { position: [number, number] }[]
): [number, number] => {
  const total = markers.length;
  const sum = markers.reduce(
    (acc, marker) => {
      acc[0] += marker.position[0];
      acc[1] += marker.position[1];
      return acc;
    },
    [0, 0]
  );

  return [sum[0] / total, sum[1] / total];
};

export const startingMapPosition = getCenterPosition(markers) as [
  number,
  number,
];

export interface ExtendedMarker extends LeafletMarker {
  _icon?: HTMLElement;
}
