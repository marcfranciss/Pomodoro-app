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
import { setNewLocalStorage } from "./defaultSetting";

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

  const getDefault = localStorage.getItem("defaultSetting");
  let getDefaultArr = getDefault
    ? JSON.parse(getDefault)
    : console.log(`No getDefault, check 'Settings.tsx'`);

  const [newPomodoroTime, setNewPomodoroTime] = useState<number>(
    getDefaultArr[0].pomodoro
  );
  const [newSBTime, setNewSBTime] = useState<number>(
    getDefaultArr[0].shortBreak
  );
  const [newLBTime, setNewLBTime] = useState<number>(
    getDefaultArr[0].longBreak
  );
  const [newFontScheme, setNewFontScheme] = useState<string>(
    getDefaultArr[0].fontScheme
  );
  const [newColorScheme, setNewColorScheme] = useState<string>(
    getDefaultArr[0].colorScheme
  );

  const updatedSetting: IUpdatedData[] = [
    {
      pomodoro: newPomodoroTime,
      shortBreak: newSBTime,
      longBreak: newLBTime,
      fontScheme: newFontScheme,
      colorScheme: newColorScheme,
    },
  ];

  const handleApply = () => {
    console.log(updatedSetting);
    setPomodoroTime(updatedSetting[0].pomodoro);
    setShortBreakTime(updatedSetting[0].shortBreak);
    setLongBreakTime(updatedSetting[0].longBreak);
    setFontScheme(updatedSetting[0].fontScheme);
    setColorScheme(updatedSetting[0].colorScheme);
    localStorage.setItem("defaultSetting", JSON.stringify(updatedSetting));
    localStorage.setItem("appSetting", JSON.stringify(updatedSetting));
    setIsDialogOpen(false);
  };

  // useEffect(() => {
  //   // 1. Declare a variable that returns the array of default setting
  //   const defaultSettingArr = setNewLocalStorage();
  //   // 2. setting up states for context using the default setting's array
  //   setPomodoroTime(defaultSettingArr.pomodoro);
  //   setShortBreakTime(defaultSettingArr.shortBreak);
  //   setLongBreakTime(defaultSettingArr.longBreak);
  //   setFontScheme(defaultSettingArr.fontScheme);
  //   setColorScheme(defaultSettingArr.colorScheme);
  // }),
  //   [];
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
            pomoTime={setNewPomodoroTime}
            sbTime={setNewSBTime}
            lbTime={setNewLBTime}
          />
          <FontSettings newFontScheme={setNewFontScheme} />
          <ColorSettings newColorScheme={setNewColorScheme} />
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
