import "./timeSettings.sass";
import { TimeOptions } from "./TimeOptions";
import { useAlarmContext } from "../../context/AlarmContext";
interface ITimeSetting {
  pomoTime: (value: number) => void;
  sbTime: (value: number) => void;
  lbTime: (value: number) => void;
}

export const TimeSetting = ({ pomoTime, sbTime, lbTime }: ITimeSetting) => {
  const { pomodoroTime, shortBreakTime, longBreakTime } = useAlarmContext();
  return (
    <section>
      <div className='time-setting'>
        <h2>Time (Minutes)</h2>
        <div className='time-setting__options'>
          <TimeOptions
            newTime={pomoTime}
            _id='pomodoro'
            title='pomodoro'
            defaultVal={pomodoroTime}
          />
          <TimeOptions
            newTime={sbTime}
            _id='shortBreak'
            title='short break'
            defaultVal={shortBreakTime}
          />
          <TimeOptions
            newTime={lbTime}
            _id='longBreak'
            title='long break'
            defaultVal={longBreakTime}
          />
        </div>
      </div>
    </section>
  );
};
