import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { ClockDisplay } from "./components/Settings/ClockDisplay";
import { Settings } from "./components/Settings/Settings";
import { AlarmContextProvider } from "./context/AlarmContext";

export const App = () => {
  return (
    <main>
      <Logo />
      <AlarmContextProvider>
        <NavBar />
        <ClockDisplay />
        <Settings />
      </AlarmContextProvider>
    </main>
  );
};
