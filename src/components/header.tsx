import logo from "../assets/dark-logo.png";
export const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <p className="site-title">
          <img src={logo} alt="a11yian logo" />
          <span className="branding">
            A11Y <span className="ian">IAN</span>
          </span>
        </p>
      </div>
    </header>
  );
};
