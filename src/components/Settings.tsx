import settingsIcon from "../assets/icon-settings.svg";
export const Settings = () => {
  return (
    <section>
      <button className='btn-setting'>
        <img src={settingsIcon} alt='' loading='lazy' />
      </button>
    </section>
  );
};
