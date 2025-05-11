import { create } from 'zustand';

import { type TileLayerType, TileLayer } from '../map-config/map-types.ts';

interface MapStore {
  currentMap: TileLayerType;
  setMap: (name: TileLayerType) => void;
}

export const useMapStore = create<MapStore>((set) => ({
  currentMap: TileLayer.SATELLITE,
  setMap: (name: TileLayerType) => set({ currentMap: name }),
}));
