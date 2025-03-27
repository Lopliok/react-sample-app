import React from 'react';
import ReactDOM from 'react-dom/client'; // ← důležité změnit import
import './index.css';
import App from './App';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>
);
