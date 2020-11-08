import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';

import {
  GlobalStyle,
  darkTheme,
  defaultTheme,
} from '@73nko-design-system/utils';

import { AppProps } from 'next/app';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <h1>Welcome to design-system!</h1>
      <button
        style={{
          margin: '0 16px 24px',
          padding: '8px',
          background: 'none',
          cursor: 'pointer',
          border: '2px solid #000',
          marginTop: '60px',
        }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{
          margin: '0 16px 24px',
          padding: '8px',
          background: 'none',
          cursor: 'pointer',
          border: '2px solid #000',
          marginTop: '60px',
        }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>

      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <GlobalStyle styles={{}} />

        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default CustomApp;
