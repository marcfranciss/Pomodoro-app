import { createContext, ReactNode, useContext, useState } from "react";

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

export const AlarmContextProvider = ({ children }: IAlarmContextProvider) => {
  const [pomodoroTime, setPomodoroTime] = useState<number>(0);
  const [shortBreakTime, setShortBreakTime] = useState<number>(0);
  const [longBreakTime, setLongBreakTime] = useState<number>(0);
  const [colorScheme, setColorScheme] = useState<string>("orange");
  const [fontScheme, setFontScheme] = useState<string>("kumbh");
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
      `useAlarContext must be used within an AlarmContextProvider`
    );
  } else {
    return context;
  }
};
