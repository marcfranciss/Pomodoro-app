import { useAlarmContext } from "../../context/AlarmContext";
import "./fontSettings.sass";

export const FontSettings = () => {
  const { fontScheme, setFontScheme } = useAlarmContext();
  return (
    <section>
      <div className='time-setting__fonts'>
        <h2>Fonts</h2>
        <div className='font-options'>
          <button
            className='btn-fonts'
            title='Kumbh Sans'
            data-font='kumbh'
            onClick={() => setFontScheme("kumbh")}
            disabled={fontScheme === "kumbh"}>
            Aa
          </button>
          <button
            className='btn-fonts'
            title='Roboto Slab'
            data-font='roboto'
            onClick={() => setFontScheme("roboto")}
            disabled={fontScheme === "roboto"}>
            Aa
          </button>
          <button
            className='btn-fonts'
            title='Space Mono'
            data-font='spacemono'
            onClick={() => setFontScheme("spacemono")}
            disabled={fontScheme === "spacemono"}>
            Aa
          </button>
        </div>
      </div>
    </section>
  );
};
