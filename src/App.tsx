import { GlobalStyles, ThemeProvider } from '@mui/material';
import type { FC, PropsWithChildren } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';

import { Explanation } from './pages/Explanation/Explanation.tsx';
import { Explore } from './pages/Explore/Explore.tsx';
import { Landing } from './pages/Landing/Landing.tsx';
import { routePaths } from './router/paths.ts';
import { darkTheme } from './theme/mui/theme.ts';

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={darkTheme} children={children} />
);

const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <Landing />,
  },
  {
    path: routePaths.explore,
    element: <Explore />,
  },
  {
    path: routePaths.explanation,
    element: <Explanation />,
  },
  {
    path: '*', // fallback to main page
    element: <Landing />,
  },
]);

function App() {
  return (
    <>
      <AppThemeProvider>
        <GlobalStyles
          styles={(theme) => ({
            html: {
              WebkitFontSmoothing: 'auto',
              backgroundColor: theme.palette.background.default,
            },
            body: {
              margin: 0,
              fontFamily: theme.typography.fontFamily,
              backgroundColor: theme.palette.background.default,
            },
            //   common mui style config
            [`& input:-webkit-autofill, 
              input:-internal-autofill-selected,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active`]: {
              transition: 'background-color 1000s ease-in-out 0s',
              boxShadow: 'inherit !important',
              textFillColor: `${theme.palette.text.primary}`,
            },
          })}
        />
        <RouterProvider router={router} />
      </AppThemeProvider>
    </>
  );
}

export default App;
