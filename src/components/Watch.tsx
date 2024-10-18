// import { color } from "framer-motion";
import { useAlarmContext } from "../context/AlarmContext";
import { motion } from "framer-motion";
import "./watch.sass";
import { useEffect, useState } from "react";

export const Watch = () => {
  const circleWidth = 346.8;
  const { appTime, fontScheme, colorScheme } = useAlarmContext();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [timeLeft, seTimeLeft] = useState<number>(() => {
    // Will retrieve the remaining time in localStorage or set to 0
    const savedTime = localStorage.getItem("currTime");
    return savedTime ? parseInt(savedTime, 10) : 0;
  });

  useEffect(() => {
    seTimeLeft(appTime);
  }, [appTime]);
  useEffect(() => {
    let interval: any;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        seTimeLeft((prev) => {
          const newTime = prev - 1;
          localStorage.setItem("currTime", newTime.toString());
          console.log(localStorage.getItem("currTime"));
          return newTime;
        });
      }, 1000);
    } else if (timeLeft <= 0) {
      clearInterval(interval);
      setIsActive(false);
      localStorage.removeItem("currTime");
      localStorage.removeItem("appTime");
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

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
                  ((appTime - timeLeft) / appTime) * 100
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
            {isActive ? (
              <button
                data-font={fontScheme}
                className='btn-timer'
                onClick={() => (
                  setIsActive(false), console.log(`timer activated`)
                )}>
                PAUSE
              </button>
            ) : (
              <button
                data-font={fontScheme}
                className='btn-timer'
                onClick={() => (
                  setIsActive(true), console.log(`timer activated`)
                )}>
                START
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
