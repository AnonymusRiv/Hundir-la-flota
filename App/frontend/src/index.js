import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import WelcomeScreen from './pages/WelcomeScreen';
import './pages/WelcomeScreen.css';
import { BrowserRouter, Router } from 'react-router-dom';
import RouteProvider from './Routes';

import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>
        <div>
            <BrowserRouter>
              <RouteProvider />
            </BrowserRouter>
        </div>
  </ChakraProvider>
);
