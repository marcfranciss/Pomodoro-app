import { useAlarmContext } from "../../context/AlarmContext";
import "./colorSettings.sass";

export const ColorSettings = () => {
  const { colorScheme, setColorScheme } = useAlarmContext();
  return (
    <section>
      <div className='time-setting__colors'>
        <h2>Colors</h2>
        <div className='color-options'>
          <button
            data-color='orange'
            title='Orange'
            onClick={() => setColorScheme("orange")}>
            {colorScheme === "orange" && "✓"}
          </button>
          <button
            data-color='aqua'
            title='Aqua'
            onClick={() => setColorScheme("aqua")}>
            {colorScheme === "aqua" && "✓"}
          </button>
          <button
            data-color='fuschia'
            title='Pink'
            onClick={() => setColorScheme("fuschia")}>
            {colorScheme === "fuschia" && "✓"}
          </button>
        </div>
      </div>
    </section>
  );
};
