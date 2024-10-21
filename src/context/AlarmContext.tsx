import { createContext, ReactNode, useContext, useState } from "react";
import { setNewLocalStorage } from "../components/Settings/defaultSetting";

interface IAlarmContext {
  selectedTimer: string;
  setSelectedTimer: (value: string) => void;
  pomodoroTime: number;
  setPomodoroTime: (value: number) => void;
  shortBreakTime: number;
  setShortBreakTime: (value: number) => void;
  longBreakTime: number;
  setLongBreakTime: (value: number) => void;
  colorScheme: string;
  setColorScheme: (value: string) => void;
  fontScheme: string;
  setFontScheme: (value: string) => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (value: boolean) => void;
}
const AlarmContext = createContext<IAlarmContext | undefined>(undefined);

interface IAlarmContextProvider {
  children: ReactNode;
}

// The initial setting for every data
const initialTimer = () => {
  const defaultSetting = localStorage.getItem("defaultSetting");
  const userSetting = localStorage.getItem("appSetting");
  if (defaultSetting === null) {
    // alert(`Please insert a new setting`);
    console.log(`Default setting is not found in local storage..`);
    console.log(`Default setting is now added to local storage.`);
    return setNewLocalStorage();
  } else if (userSetting === null) {
    console.log(`User setting is not found in local storage..`);
    console.log(`User setting is now added to local storage.`);
    return setNewLocalStorage();
  } else {
    const userArr = JSON.parse(userSetting);
    return userArr[0];
  }
};

export const AlarmContextProvider = ({ children }: IAlarmContextProvider) => {
  const [pomodoroTime, setPomodoroTime] = useState<number>(
    initialTimer().pomodoro
  );
  const [shortBreakTime, setShortBreakTime] = useState<number>(
    initialTimer().shortBreak
  );
  const [longBreakTime, setLongBreakTime] = useState<number>(
    initialTimer().longBreak
  );
  const [colorScheme, setColorScheme] = useState<string>(
    initialTimer().colorScheme
  );
  const [fontScheme, setFontScheme] = useState<string>(
    initialTimer().fontScheme
  );
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedTimer, setSelectedTimer] = useState<string>("pomodoro");

  return (
    <AlarmContext.Provider
      value={{
        selectedTimer,
        setSelectedTimer,
        pomodoroTime,
        setPomodoroTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime,
        colorScheme,
        setColorScheme,
        fontScheme,
        setFontScheme,
        isDialogOpen,
        setIsDialogOpen,
      }}>
      {children}
    </AlarmContext.Provider>
  );
};

export const useAlarmContext = () => {
  const context = useContext(AlarmContext);

  if (context === undefined) {
    throw new Error(
      `useAlarmContext must be used within an AlarmContextProvider`
    );
  } else {
    return context;
  }
};
