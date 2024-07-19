import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import { Provider } from "react-redux";
import appStore from "./app/appStore.js";



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
  </React.StrictMode>
);
