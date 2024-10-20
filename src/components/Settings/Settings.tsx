// icons
import settingsIcon from "../../assets/icon-settings.svg";
import closeIcon from "../../assets/icon-close.svg";

// components
import { ColorSettings } from "./ColorSettings";
import { FontSettings } from "./FontSettings";
import { TimeSetting } from "./TimeSetting";

// sass
import "./Settings.sass";
import { useAlarmContext } from "../../context/AlarmContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IUpdatedData {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  fontScheme: string;
  colorScheme: string;
}
[];
export const Settings = () => {
  const {
    setPomodoroTime,
    setShortBreakTime,
    setLongBreakTime,
    isDialogOpen,
    setIsDialogOpen,
    setFontScheme,
    setColorScheme,
  } = useAlarmContext();
  const [newPomodoroTime, setNewPomodoroTime] = useState<number>(0);
  const [newSBTime, setNewSBTime] = useState<number>(0);
  const [newLBTime, setNewLBTime] = useState<number>(0);

  const handleApply = () => {
    const updatedSetting: IUpdatedData[] = [
      {
        pomodoro: newPomodoroTime,
        shortBreak: newSBTime,
        longBreak: newLBTime,
        fontScheme: "kumbh",
        colorScheme: "orange",
      },
    ];
    localStorage.setItem("appSetting", JSON.stringify(updatedSetting));
    const newStorageData: string | null = localStorage.getItem("appSetting");
    console.log(`New storage data: ${newStorageData}`);

    let updatedData: IUpdatedData[] = newStorageData
      ? JSON.parse(newStorageData)
      : [];
    setPomodoroTime(updatedData[0].pomodoro);
    setShortBreakTime(updatedData[0].shortBreak);
    setLongBreakTime(updatedData[0].longBreak);
    setFontScheme(updatedData[0].fontScheme);
    setColorScheme(updatedData[0].colorScheme);
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const newLocalStorage = localStorage.getItem("appSetting");
    // check if the client is new User:
    // 1. if new user, setup a default setting;
    // 2. if not, use the user preferred setting in local storage.
    if (newLocalStorage === null) {
      const defaultSetting = [
        {
          pomodoro: 25 * 60,
          shortBreak: 5 * 60,
          longBreak: 15 * 60,
          fontScheme: "kumbh",
          colorScheme: "orange",
        },
      ];
      localStorage.setItem("appSetting", JSON.stringify(defaultSetting));
      // 3. setting up states for context
      setPomodoroTime(defaultSetting[0].pomodoro);
      setShortBreakTime(defaultSetting[0].shortBreak);
      setLongBreakTime(defaultSetting[0].longBreak);
      setFontScheme(defaultSetting[0].fontScheme);
      setColorScheme(defaultSetting[0].colorScheme);
    }
  }),
    [];
  return (
    <section>
      <motion.dialog
        variants={{
          open: { opacity: 1, scale: 1 },
          close: { opacity: 0, scale: 0 },
        }}
        initial='close'
        animate={isDialogOpen ? "open" : "exit"}
        exit='close'
        open={isDialogOpen}
        onKeyDown={(e) => (e.key === "Escape" ? setIsDialogOpen(false) : null)}>
        <div className='dialog-setting__container'>
          <header>
            <h2>Settings</h2>
            <button
              className='btn-close'
              onClick={() => setIsDialogOpen(false)}>
              <img src={closeIcon} alt='' loading='lazy' />
            </button>
          </header>
          <TimeSetting
            pomodoroTime={setNewPomodoroTime}
            sbTime={setNewSBTime}
            lbTime={setNewLBTime}
          />
          <FontSettings />
          <ColorSettings />
          <button className='btn-apply' onClick={handleApply}>
            Apply
          </button>
        </div>
      </motion.dialog>
      <button
        title='Settings'
        className='btn-setting'
        onClick={() => setIsDialogOpen(true)}>
        <img src={settingsIcon} alt='' loading='lazy' />
      </button>
    </section>
  );
};
