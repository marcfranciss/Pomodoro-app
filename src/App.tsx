import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { Watch } from "./components/Watch";
import { Settings } from "./components/Settings/Settings";
import { AlarmContextProvider } from "./context/AlarmContext";

export const App = () => {
  return (
    <main>
      <Logo />
      <AlarmContextProvider>
        <NavBar />
        <Watch />
        <Settings />
      </AlarmContextProvider>
    </main>
  );
};
