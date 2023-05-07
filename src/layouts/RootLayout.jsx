import { Outlet } from "react-router-dom";
import { SmallNavBar } from "./smallNavBar";

export function RootLayout() {
  return (
    <>
      <SmallNavBar />

      <Outlet />
    </>
  );
}
