import upIcon from "../../assets/icon-arrow-up.svg";
import downIcon from "../../assets/icon-arrow-down.svg";
import { useEffect, useState } from "react";

interface ITimeOptions {
  _id: string;
  title: string;
  newTime: (value: number) => void;
  defaultVal: number;
}

export const TimeOptions = ({
  _id,
  title,
  newTime,
  defaultVal,
}: ITimeOptions) => {
  const maxCount = 60;

  const [inputCount, setInputCount] = useState<number>(defaultVal / maxCount);

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

  useEffect(() => {
    newTime(inputCount * maxCount);
  }, [inputCount]);

  return (
    <label htmlFor={_id}>
      {title}
      <div className='input-container'>
        <input
          id={_id}
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
