export const TileLayer = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  COMMON: 'COMMON',
  SATELLITE: 'SATELLITE',
  HYBRID: 'HYBRID',
  STREET: 'STREET',
} as const;

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
  {
    name: TileLayer.STREET,
    map: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    },
  },
  {
    name: TileLayer.SATELLITE,
    map: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution:
        'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, USDA FSA, USGS, AeroGRID, IGN, and the GIS User Community',
    },
  },
  {
    name: TileLayer.HYBRID,
    map: {
      // Esri World Imagery with labels (two-layer setup needed in React Leaflet)
      url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Labels &copy; Esri',
    },
  },
];
