import upIcon from "../../assets/icon-arrow-up.svg";
import downIcon from "../../assets/icon-arrow-down.svg";
import { useState } from "react";

interface ITimeOptions {
  id: string;
}
export const TimeOptions = ({ id }: ITimeOptions) => {
  const maxCount = 60;
  const [inputCount, setInputCount] = useState<number>(0);

  const handleUpButton = () => {
    if (inputCount >= maxCount) {
      return;
    } else {
      setInputCount((prev) => prev + 1);
    }
  };
  const handleDownButton = () => {
    if (inputCount < 1) {
      return;
    } else {
      setInputCount((prev) => prev - 1);
    }
  };
  return (
    <label htmlFor={id}>
      pomodoro
      <div className='input-container'>
        <input
          id={id}
          type='number'
          name=''
          min='0'
          max={maxCount}
          value={inputCount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputCount(Number(e.target.value))
          }
        />
        <div className='input-arrow-btns'>
          <button className='btn-up' onClick={handleUpButton}>
            <img src={upIcon} alt='' />
          </button>
          <button className='btn-down' onClick={handleDownButton}>
            <img src={downIcon} alt='' />
          </button>
        </div>
      </div>
    </label>
  );
};
