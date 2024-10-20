import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { PomodoroClock } from "./components/PomodoroClock";
import { Settings } from "./components/Settings/Settings";
import { ShortBreakClock } from "./components/ShortBreakClock";
import { AlarmContextProvider } from "./context/AlarmContext";

export const App = () => {
  return (
    <main>
      <Logo />
      <AlarmContextProvider>
        <NavBar />
        <PomodoroClock />
        <ShortBreakClock />
        <Settings />
      </AlarmContextProvider>
    </main>
  );
};
