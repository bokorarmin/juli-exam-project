import { GlobalStyles, ThemeProvider } from '@mui/material';
import type { FC, PropsWithChildren } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';

import Landing from './components/Landing.tsx';
import { lightTheme } from './theme/theme.ts';

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={lightTheme} children={children} />
);

const router = createBrowserRouter([
  {
    path: '*',
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
