import { useState } from "react";
import { useAlarmContext } from "../../context/AlarmContext";
import "./colorSettings.sass";

interface IColorSettings {
  newColorScheme: (value: string) => void;
}
const colorsArr = [
  { title: "Orange", name: "orange" },
  { title: "Aqua", name: "aqua" },
  { title: "Fuschia Pink", name: "fuschia" },
];

export const ColorSettings = ({ newColorScheme }: IColorSettings) => {
  const { colorScheme } = useAlarmContext();

  const [colorSetting, setColorSetting] = useState<string>(colorScheme);

  const handleColorSelected = (val: string) => {
    setColorSetting(val);
    newColorScheme(val);
  };
  return (
    <section>
      <div className='time-setting__colors'>
        <h2>Colors</h2>
        <div className='color-options'>
          {colorsArr.map((color) => {
            return (
              <button
                key={color.name}
                data-color={color.name}
                title={color.title}
                onClick={() => handleColorSelected(color.name)}>
                {colorSetting === color.name && "✓"}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
