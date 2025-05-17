import { Marker as LeafletMarker } from 'leaflet';

export const startingMapPosition: [number, number] = [
  47.4979, 19.0702,
] as const;

export const markers: {
  position: [number, number];
  video: string;
  streetName: string;
}[] = [
  {
    position: [47.503, 19.0811],
    video: '/videos/istvan_u_10.webm',
    streetName: 'István utca 10',
  },
  {
    position: [47.5051, 19.0825],
    video: '/videos/istvan_u_28.webm',
    streetName: 'István utca 28',
  },
] as const;

export interface ExtendedMarker extends LeafletMarker {
  _icon?: HTMLElement;
}
