import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./Component/Home.jsx";
import Contact from "./Component/ContactUs.jsx";
import Error from "./Component/Error.jsx";
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryDetail from './Component/CountryDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/CountryDetail",
        element: <CountryDetail/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
