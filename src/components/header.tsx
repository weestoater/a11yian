import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/dark-logo.png";
import { useEscapeKey } from "../hooks/use-escape-key";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Close the dropdown whenever the route changes.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEscapeKey(isMenuOpen, () => {
    setIsMenuOpen(false);
    toggleRef.current?.focus();
  });

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <p className="site-title">
          <img src={logo} alt="a11yian logo" />
          <span className="branding">
            A11Y <span className="ian">IAN</span>
          </span>
        </p>
        <button
          type="button"
          className="nav-toggle"
          ref={toggleRef}
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-icon" aria-hidden="true" />
          {isMenuOpen ? "Close menu" : "Menu"}
        </button>
        <nav className="site-nav" aria-label="Primary">
          <ul id="primary-nav" data-open={isMenuOpen}>
            {NAV_LINKS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};
