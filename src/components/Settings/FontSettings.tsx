import { useState } from "react";
import { useAlarmContext } from "../../context/AlarmContext";
import "./fontSettings.sass";

interface IFontSettings {
  newFontScheme: (value: string) => void;
}
const fontsArr = [
  { title: "Kumbh Sans", name: "kumbh" },
  { title: "Roboto Slab", name: "roboto" },
  { title: "Space Mono", name: "spacemono" },
];
export const FontSettings = ({ newFontScheme }: IFontSettings) => {
  const { fontScheme } = useAlarmContext();

  const [fontSetting, setFontSetting] = useState<string>(fontScheme);
  const handleFontSelected = (val: string) => {
    setFontSetting(val);
    newFontScheme(val);
  };
  return (
    <section>
      <div className='time-setting__fonts'>
        <h2>Fonts</h2>
        <div className='font-options'>
          {fontsArr.map((fonts) => {
            return (
              <button
                key={fonts.name}
                className='btn-fonts'
                title={fonts.title}
                data-font={fonts.name}
                onClick={() => handleFontSelected(fonts.name)}
                disabled={fontSetting === fonts.name}>
                Aa
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
