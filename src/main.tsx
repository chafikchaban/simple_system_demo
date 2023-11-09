import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import '@mantine/core/styles.css';

import HomeController from './pages/Home/Home.controller.tsx';

import { httpClient } from './service/http/httpClient.ts';
import { HomeVM } from './pages/Home/Home.vm.ts';
import AppLayout from './layouts/AppLayout.tsx';

httpClient.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(HomeController, { vm: new HomeVM() }),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </MantineProvider>
  </React.StrictMode>,
)

