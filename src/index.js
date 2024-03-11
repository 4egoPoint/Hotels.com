
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/home/Home';
import store from "./app/store"
import { Provider } from "react-redux"
import Rewards from './pages/rewards/Rewards';
import Accomodation from './pages/accomodation/AccomodationPage';
import Getapp from './pages/getapp/Getapp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/accomodation",
        element: <Accomodation />
      },
      {
        path: "/getapp",
        element: <Getapp />
      },
    ]
  },
  {
    path: "/rewards",
    element: <Rewards />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
);

