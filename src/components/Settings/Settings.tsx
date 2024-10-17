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
import { easeOut, motion } from "framer-motion";

export const Settings = () => {
  const { isDialogOpen, setIsDialogOpen } = useAlarmContext();
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
          <TimeSetting />
          <FontSettings />
          <ColorSettings />
          <button className='btn-apply'>Apply</button>
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
