import React from "react";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { Watch } from "./components/Watch";
import { Settings } from "./components/Settings";

export const App = () => {
  return (
    <main>
      <Logo />
      <NavBar />
      <Watch />
      <Settings />
    </main>
  );
};
