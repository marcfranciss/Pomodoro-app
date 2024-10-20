import "./timeSettings.sass";
import { TimeOptions } from "./TimeOptions";
interface ITimeSetting {
  pomodoroTime: (value: number) => void;
  sbTime: (value: number) => void;
  lbTime: (value: number) => void;
}

export const TimeSetting = ({ pomodoroTime, sbTime, lbTime }: ITimeSetting) => {
  return (
    <section>
      <div className='time-setting'>
        <h2>Time (Minutes)</h2>
        <div className='time-setting__options'>
          <TimeOptions newTime={pomodoroTime} id='pomodoro' title='pomodoro' />
          <TimeOptions newTime={sbTime} id='shortBreak' title='short break' />
          <TimeOptions newTime={lbTime} id='longBreak' title='long break' />
        </div>
      </div>
    </section>
  );
};
