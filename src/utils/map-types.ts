// Define allowed tile layer names
type TileLayerName = 'LIGHT' | 'DARK' | 'COMMON';

interface MapConfig {
  url: string;
  attribution: string;
}

interface TileLayer {
  name: TileLayerName;
  map: MapConfig;
}

const tileLayers: TileLayer[] = [
  {
    name: 'LIGHT',
    map: {
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    },
  },
  {
    name: 'DARK',
    map: {
      url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    },
  },
  {
    name: 'COMMON',
    map: {
      url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      attribution:
        '&copy; OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team',
    },
  },
];
