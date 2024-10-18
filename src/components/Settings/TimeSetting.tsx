import "./timeSettings.sass";
import { TimeOptions } from "./TimeOptions";

export const TimeSetting = () => {
  return (
    <section>
      <div className='time-setting'>
        <h2>Time (Minutes)</h2>
        <div className='time-setting__options'>
          <TimeOptions id='pomodoro' title='pomodoro' />
          <TimeOptions id='shortBreak' title='short break' />
          <TimeOptions id='longBreak' title='long break' />
        </div>
      </div>
    </section>
  );
};
