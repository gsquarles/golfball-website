import { Outlet, ScrollRestoration } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
