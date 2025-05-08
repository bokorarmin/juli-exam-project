import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

Promise.all([]).then(() => {
  createRoot(document.getElementById('root')!).render(<App />);
});
