// import { color } from "framer-motion";
import { useAlarmContext } from "../context/AlarmContext";
import { motion } from "framer-motion";
import "./watch.sass";
import { useEffect, useState } from "react";

export const ShortBreakClock = () => {
  const circleWidth = 346.8;
  const { shortBreakTime, fontScheme, colorScheme } = useAlarmContext();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    setIsActive(false);
    setTimeLeft(shortBreakTime);
  }, [shortBreakTime]);

  useEffect(() => {
    let interval: any;
    const savedShortBreak = localStorage.getItem("appSetting");
    if (savedShortBreak === null) {
      console.warn(
        `Setting seems to be deleted in local storage. Please setup a new setting.`
      );
    } else {
      let dataArray = savedShortBreak ? JSON.parse(savedShortBreak) : [];
      setTimeLeft(dataArray[0].shortBreak);
      if (isActive && timeLeft > 0) {
        interval = setInterval(() => {
          setTimeLeft((prev) => {
            dataArray[0].shortBreak = prev - 1;
            localStorage.setItem("appSetting", JSON.stringify(dataArray));
            return dataArray[0].shortBreak;
          });
        }, 1000);
      } else if (timeLeft <= 0) {
        clearInterval(interval);
        setIsActive(false);
      }
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleRestart = () => {
    setTimeLeft(shortBreakTime);

    const defaultData = localStorage.getItem("defaultSetting");
    const latestData = localStorage.getItem("appSetting");
    if (latestData === null) {
      let newLatestData = defaultData ? JSON.parse(defaultData) : [];
      localStorage.setItem("appSetting", JSON.stringify(newLatestData));
    } else {
      let replacedArr = latestData ? JSON.parse(latestData) : [];
      replacedArr[0].shortBreak = shortBreakTime;
      localStorage.setItem("appSetting", JSON.stringify(replacedArr));
    }
    setIsActive(false);
  };
  function convertToCountdown(totalSecs: number): string {
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${Math.floor(mins).toString().padStart(2, "0")}:${Math.floor(secs)
      .toString()
      .padStart(2, "0")}`;
  }
  return (
    <section id='watch'>
      <div className='watch-container'>
        <div className='round-div'>
          <div className='progress-line'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
              width={circleWidth}
              height={circleWidth}>
              <motion.circle
                cx={circleWidth / 2}
                cy={circleWidth / 2}
                r={circleWidth / 2 - 10}
                strokeLinecap='round'
                pathLength='100'
                strokeDasharray={`${
                  ((shortBreakTime - timeLeft) / shortBreakTime) * 100
                } 100`}
                stroke={
                  colorScheme === "orange"
                    ? "hsla(0, 91%, 71%, 100%)"
                    : colorScheme === "aqua"
                    ? "hsla(182, 91%, 71%, 100%)"
                    : colorScheme === "fuschia"
                    ? "hsla(284, 89%, 74%, 100%)"
                    : ""
                }
              />
            </svg>
            <p data-font={fontScheme}>{convertToCountdown(timeLeft)}</p>
            {timeLeft <= 0 && (
              <button
                data-font={fontScheme}
                className='btn-timer'
                onClick={handleRestart}>
                Restart
              </button>
            )}
            {isActive && timeLeft > 0 && (
              <button
                data-font={fontScheme}
                className='btn-timer'
                onClick={() => setIsActive(false)}>
                PAUSE
              </button>
            )}
            {!isActive && timeLeft > 0 && (
              <button
                data-font={fontScheme}
                className='btn-timer'
                onClick={() => setIsActive(true)}>
                START
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
