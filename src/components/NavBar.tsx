import { useAlarmContext } from "../context/AlarmContext";
import "./navBar.sass";

const timerOptions = [
  { name: "pomodoro", className: "btn-pomodoro", text: "pomodoro" },
  { name: "shortBreak", className: "btn-shortbreak", text: "short break" },
  { name: "longBreak", className: "btn-longbreak", text: "long break" },
];
export const NavBar = () => {
  const { selectedTimer, setSelectedTimer, fontScheme, colorScheme } =
    useAlarmContext();
  return (
    <nav>
      <div className='nav-container'>
        {timerOptions.map((timer) => {
          return (
            <button
              data-font={fontScheme}
              data-color={selectedTimer === timer.name && `${colorScheme}`}
              key={timer.name}
              className={`
                ${timer.className}
                ${selectedTimer === timer.name && "isActive"}`}
              onClick={() => setSelectedTimer(timer.name)}>
              {timer.text}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
