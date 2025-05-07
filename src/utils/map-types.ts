export const TileLayer = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  COMMON: 'COMMON',
};
export type TileLayerType = (typeof TileLayer)[keyof typeof TileLayer];

export interface MapConfig {
  url: string;
  attribution: string;
}

export interface TileLayerItem {
  name: TileLayerType;
  map: MapConfig;
}

export const tileLayers: TileLayerItem[] = [
  {
    name: TileLayer.LIGHT,
    map: {
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    },
  },
  {
    name: TileLayer.DARK,
    map: {
      url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    },
  },
  {
    name: TileLayer.COMMON,
    map: {
      url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      attribution:
        '&copy; OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team',
    },
  },
];
