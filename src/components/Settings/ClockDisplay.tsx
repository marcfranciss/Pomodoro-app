// import React from 'react'
import { useAlarmContext } from "../../context/AlarmContext";
import { PomodoroClock } from "../PomodoroClock";
import { ShortBreakClock } from "../ShortBreakClock";

export const ClockDisplay = () => {
  const { selectedTimer } = useAlarmContext();
  return (
    <section>
      <div className='container'>
        {selectedTimer === "pomodoro" && <PomodoroClock />}
        {selectedTimer === "shortBreak" && <ShortBreakClock />}
        {selectedTimer === "longbreak" && <></>}
      </div>
    </section>
  );
};
