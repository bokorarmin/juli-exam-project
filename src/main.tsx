import { createRoot } from 'react-dom/client';

import App from './App';
import './theme/index.css';

Promise.all([]).then(() => {
  createRoot(document.getElementById('root')!).render(<App />);
});
