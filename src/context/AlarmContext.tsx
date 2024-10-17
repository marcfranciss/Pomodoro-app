import { createContext, ReactNode, useContext, useState } from "react";

interface IAlarmContext {
  appTime: number;
  setAppTime: (value: number) => void;
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
  const [appTime, setAppTime] = useState<number>(0);
  const [colorScheme, setColorScheme] = useState<string>("Kumbh");
  const [fontScheme, setFontScheme] = useState<string>("orange");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <AlarmContext.Provider
      value={{
        appTime,
        setAppTime,
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
