import pageLogo from "../assets/logo.svg";

export const Logo = () => {
  return (
    <header>
      <img src={pageLogo} alt='' loading='lazy' />
    </header>
  );
};
