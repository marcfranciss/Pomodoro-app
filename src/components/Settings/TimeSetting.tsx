import "./timeSettings.sass";
import { TimeOptions } from "./TimeOptions";

export const TimeSetting = () => {
  return (
    <section>
      <div className='time-setting'>
        <h2>Time (Minutes)</h2>
        <div className='time-setting__options'>
          <TimeOptions id='pomodoro' />
          <TimeOptions id='shortBreak' />
          <TimeOptions id='longBreak' />
        </div>
      </div>
    </section>
  );
};
