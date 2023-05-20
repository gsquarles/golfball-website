import { createHashRouter } from "react-router-dom";
import { Home } from "./pages/Home";

import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { RootLayout } from "./layouts/RootLayout";

export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
    ],
  },
]);
